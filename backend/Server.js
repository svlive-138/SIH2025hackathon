
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const contentRoutes = require('./routes/content');
const authRoutes = require('./routes/auth');

const app = express();

// Trust proxy for secure cookies and HTTPS in production
app.set('trust proxy', 1);

// CORS: restrict origin in production
const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['*'];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Helmet: set secure headers
//app.use(helmet({
  //crossOriginResourcePolicy: true,
//  contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false
//}));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "https://sih2025hackathon.onrender.com/"],
      
    }
  }
}));

app.use(express.json({ limit: '10mb' }));
app.use('/api/content', contentRoutes);
app.use('/api/auth', authRoutes);
// Serve frontend from /public at the root
app.use(express.static(path.join(__dirname, '../public')));

// Catch-all JSON 404 for API routes
// Place catch-all 404 after all valid routes, using regex
app.use(/^\/api\/content(\/.*)?$/, (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});
// Serve uploaded videos statically
// Add CORS headers for video static route
app.use('/uploads/videos', (req, res, next) => {
  const allowedOrigins = [
    'http://localhost:5000',
    'http://127.0.0.1:5000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'https://sih2025hackathon.onrender.com'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Range');
  res.header('Access-Control-Expose-Headers', 'Content-Range, Accept-Ranges');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }
  next();
}, express.static('uploads/videos'));

// Health check endpoint
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
app.get('/api/content', (req, res) => {
    res.render("./public/index.html")
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const MONGO_URI = process.env.MONGO_URI ;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

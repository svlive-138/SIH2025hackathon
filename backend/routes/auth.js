const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// Demo user DB (replace with real DB in production)
const users = [
  { id: 't1', username: 'kamalpreet_kaur', password: 'demo123', role: 'teacher' },
  { id: 's1', username: 'arjun_singh', password: 'demo123', role: 'student' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '2h' });
  res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
});

module.exports = router;

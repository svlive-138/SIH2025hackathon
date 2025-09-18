# SIH2025hackathon – Rural Digital Learning Platform

A secure, production-ready digital learning platform for rural students and teachers, built with Node.js, Express, MongoDB, and a modern vanilla JS/HTML/CSS frontend.

## Features

- **Multi-language support:** English, Hindi, Punjabi
- **User roles:** Student, Teacher
- **Secure authentication:** JWT-based login
- **Content management:** Upload, preview, and delete educational videos, documents, images, and more
- **Responsive UI:** Mobile-friendly design with modern navigation
- **Performance analytics:** Interactive charts using Chart.js
- **Robust backend:** Express REST API, MongoDB Atlas, Multer file uploads, Helmet security, CORS
- **File management:** Video uploads, previews, and permanent deletion (database + filesystem)
- **Offline/online indicator**

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account
- Git

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/svlive-138/SIH2025hackathon.git
   cd SIH2025hackathon
   ```
2.Install backend dependencies:
```
cd backend
npm install
```
3.Configure environment variables:

Create a .env file in the backend folder
```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5000
PORT=5000
```
4.Start the backend server:
```
node [server.js](http://_vscodecontentref_/0)
```
5.Open the frontend:

Open public/index.html in your browser,
or serve the public folder using a static server.

Usage
Login: Use demo credentials or register as a student/teacher.
Upload content: Teachers can upload videos, documents, and images.
Preview & delete: Uploaded content can be previewed and deleted (with proper permissions).
Analytics: View performance charts and statistics.

Folder Structure
```
backend/         # Node.js/Express API, models, routes, middleware
public/          # Frontend HTML, CSS, JS, Chart.js, assets
uploads/         # Uploaded video and file storage (not tracked in git)
.env             # Environment variables (not tracked in git)
.gitignore       # Git ignore rules
README.md        # Project documentation
```
Security:
JWT authentication for all protected routes
Helmet for HTTP headers and CSP
CORS configuration for safe cross-origin requests
Input validation and error handling

Contributing
Pull requests and suggestions are welcome!
Please open an issue for major changes.

License
This project is licensed under the MIT License.

Developed for SIH 2025 Hackathon by svlive-138

Let me know if you want to customize any section or add more details!


   

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;
    switch (file.mimetype.split('/')[0]) {
      case 'video': uploadPath = 'uploads/videos/'; break;
      case 'audio': uploadPath = 'uploads/audio/'; break;
      case 'image': uploadPath = 'uploads/images/'; break;
      case 'application': uploadPath = 'uploads/documents/'; break;
      default: uploadPath = 'uploads/misc/';
    }
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'video/mp4', 'video/avi', 'video/mov', 'video/wmv',
    'audio/mp3', 'audio/wav', 'audio/ogg',
    'image/jpeg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf', 'application/msword', 'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  ];
  if (allowedTypes.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Invalid file type. Only educational content files are allowed.'), false);
};

function getMulterInstance() {
  return multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 500 * 1024 * 1024 }
  });
}

module.exports = getMulterInstance;
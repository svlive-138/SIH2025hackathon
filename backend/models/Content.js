const mongoose = require('mongoose');
const contentSchema = new mongoose.Schema({
  title: { en: String, hi: String, pa: String },
  description: { en: String, hi: String, pa: String },
  type: { type: String, enum: ['video', 'audio', 'image', 'document', 'interactive'], required: true },
  filePath: String,
  fileName: String,
  fileSize: Number,
  mimeType: String,
  subject: { type: String, enum: ['mathematics', 'science', 'english', 'hindi', 'punjabi', 'social_studies'] },
  grade: { type: String, enum: ['6', '7', '8', '9', '10'] },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  duration: Number,
  videoQualities: [{ quality: String, filePath: String, fileSize: Number }],
  subtitles: [{ language: String, filePath: String }],
  status: { type: String, enum: ['processing', 'active', 'inactive', 'error'], default: 'processing' },
  downloadCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 },
  uploadedBy: { type: String },
  uploadedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Content', contentSchema);

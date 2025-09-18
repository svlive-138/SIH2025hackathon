



const express = require('express');
const router = express.Router();
const getMulterInstance = require('../middleware/upload');
const upload = getMulterInstance();
const auth = require('../middleware/auth');
const Content = require('../models/Content');
const path = require('path');

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const ffmpeg =require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
// List all content
router.get('/list', async (req, res) => {
  try {
    const content = await Content.find().sort({ uploadedAt: -1 });
    // Ensure fileName, filePath, and mimeType are included for video content
    const contentWithFiles = content.map(item => {
      const obj = item.toObject();
      // Only include fileName, filePath, mimeType for video/audio/document
      if (['video', 'audio', 'document'].includes(obj.type)) {
        obj.fileName = item.fileName;
        obj.filePath = item.filePath;
        obj.mimeType = item.mimeType;
      }
      return obj;
    });
    res.json(contentWithFiles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch content', details: err.message });
  }
});







// Upload single video (protected)
router.post('/upload-video', auth, upload.single('video'), async (req, res) => {
  try {
    // File presence and type check
    if (!req.file) return res.status(400).json({ error: 'No video file provided' });
    const allowedVideoTypes = ['video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/webm'];
    if (!allowedVideoTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ error: 'Invalid video file type.' });
    }
    if (req.file.size > 500 * 1024 * 1024) {
      return res.status(400).json({ error: 'File too large. Max 500MB allowed.' });
    }

    // Validate and sanitize input
    let title, description, languages;
    try {
      title = JSON.parse(req.body.title);
      description = JSON.parse(req.body.description);
      languages = JSON.parse(req.body.language);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON in title, description, or language.' });
    }
    // Prevent prototype pollution
    const isSafe = (obj) => {
      if (typeof obj !== 'object' || obj === null) return false;
      return !Object.keys(obj).some(k => k === '__proto__' || k === 'constructor' || k === 'prototype');
    };
    if (!isSafe(title) || !isSafe(description)) {
      return res.status(400).json({ error: 'Unsafe object keys detected.' });
    }

    // Validate subject and grade
    const allowedSubjects = ['mathematics', 'science', 'english', 'hindi', 'punjabi', 'social_studies'];
    const allowedGrades = ['6', '7', '8', '9', '10'];
    if (!allowedSubjects.includes(req.body.subject)) {
      return res.status(400).json({ error: 'Invalid subject.' });
    }
    if (!allowedGrades.includes(req.body.grade)) {
      return res.status(400).json({ error: 'Invalid grade.' });
    }

    // Validate user
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: 'Unauthorized. User not authenticated.' });
    }
    // Delete content by ID (protected)
router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) return res.status(404).json({ error: 'Content not found' });
    // Allow uploader or teacher to delete
    if (content.uploadedBy !== req.user.id && req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Not authorized to delete this content' });
    }
    // Delete video file from disk if type is video and fileName exists
    if (content.type === 'video' && content.fileName) {
      const fs = require('fs');
      const path = require('path');
      const videoPath = path.join(__dirname, '../uploads/videos', content.fileName);
      fs.unlink(videoPath, err => {
        if (err && err.code !== 'ENOENT') {
          console.error('Failed to delete video file:', videoPath, err);
        }
      });
    }
    await Content.findByIdAndDelete(req.params.id);
    res.json({ message: 'Content deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete content', details: err.message });
  }
});

    const content = new Content({
      title,
      description,
      type: 'video',
      filePath: req.file.path,
      fileName: req.file.filename,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
      subject: req.body.subject,
      grade: req.body.grade,
      languages,
      uploadedBy: req.user.id,
      uploadedAt: new Date(),
      status: 'processing'
    });
    await content.save();
    generateVideoVariants(req.file.path, content._id);
    res.status(201).json({ message: 'Video uploaded successfully', contentId: content._id, status: 'processing' });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed', details: error.message });
  }
});

// Helper: Generate video qualities
function generateVideoVariants(inputPath, contentId) {
  const outputDir = path.dirname(inputPath);
  ffmpeg(inputPath)
    .output(path.join(outputDir, `${contentId}_480p.mp4`))
    .videoCodec('libx264').size('854x480').videoBitrate('800k').audioBitrate('96k')
    .on('end', () => updateContentStatus(contentId, '480p_ready')).run();
  ffmpeg(inputPath)
    .output(path.join(outputDir, `${contentId}_720p.mp4`))
    .videoCodec('libx264').size('1280x720').videoBitrate('1500k').audioBitrate('128k')
    .on('end', () => updateContentStatus(contentId, '720p_ready')).run();
}
function updateContentStatus(contentId, status) {
  Content.findByIdAndUpdate(contentId, { status }, () => {});
}

module.exports = router;
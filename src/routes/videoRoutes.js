const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload', authMiddleware, videoController.uploadVideo);

module.exports = router;

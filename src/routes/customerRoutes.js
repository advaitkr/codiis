const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerControllers');
const videoController = require('../controllers/videoControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', customerController.registerCustomer);
router.get('/videos', authMiddleware, videoController.getVideos);

module.exports = router;

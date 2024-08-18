const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');
const planController = require('../controllers/planControllers');
const videoController = require('../controllers/videoControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', adminController.registerAdmin);
router.post('/videos/upload', authMiddleware, videoController.uploadVideo);
router.post('/plans', authMiddleware, planController.createPlan);
router.get('/plans', authMiddleware, planController.getPlans);
router.put('/plans', authMiddleware, planController.updatePlan);
router.delete('/plans', authMiddleware, planController.deletePlan);

module.exports = router;

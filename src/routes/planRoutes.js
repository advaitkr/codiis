// src/routes/planRoutes.js

const express = require('express');
const {
    createPlan,
    getPlans,
    getPlanById,
    updatePlan,
    deletePlan,
} = require('../controllers/planController');
const { adminAuth } = require('../middlewares/authMiddleware');

const router = express.Router();
router.post('/', adminAuth, createPlan);
router.get('/', adminAuth, getPlans);
router.get('/:id', adminAuth, getPlanById);
router.put('/:id', adminAuth, updatePlan);
router.delete('/:id', adminAuth, deletePlan);

module.exports = router;

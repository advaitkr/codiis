// src/controllers/planController.js

const Plan = require('../models/Plan');

// Create a new plan
exports.createPlan = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const newPlan = new Plan({ name, description, price });
        await newPlan.save();

        res.status(201).json(newPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all plans
exports.getPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single plan by ID
exports.getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);

        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a plan by ID
exports.updatePlan = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const updatedPlan = await Plan.findByIdAndUpdate(
            req.params.id,
            { name, description, price },
            { new: true }
        );

        if (!updatedPlan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        res.status(200).json(updatedPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a plan by ID
exports.deletePlan = async (req, res) => {
    try {
        const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

        if (!deletedPlan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        res.status(200).json({ message: 'Plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

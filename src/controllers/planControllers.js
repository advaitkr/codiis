const Plan = require('../models/Plan');

exports.createPlan = async (req, res) => {
    const { name, price, duration } = req.body;
    try {
        const plan = new Plan({
            name,
            price,
            duration
        });

        await plan.save();
        res.json(plan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updatePlan = async (req, res) => {
    const { id, name, price, duration } = req.body;
    try {
        let plan = await Plan.findById(id);
        if (!plan) {
            return res.status(404).json({ msg: 'Plan not found' });
        }

        plan.name = name;
        plan.price = price;
        plan.duration = duration;

        await plan.save();
        res.json(plan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deletePlan = async (req, res) => {
    try {
        let plan = await Plan.findById(req.body.id);
        if (!plan) {
            return res.status(404).json({ msg: 'Plan not found' });
        }

        await plan.remove();
        res.json({ msg: 'Plan removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

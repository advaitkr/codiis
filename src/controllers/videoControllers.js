const Video = require('../models/Video');
const Plan = require('../models/Plan');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage }).single('video');

exports.uploadVideo = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ errors: [{ msg: err.message }] });
        }
        const { title, description, planId } = req.body;
        try {
            const video = new Video({
                title,
                description,
                url: req.file.path,
                admin: req.user.id,
                plan: planId
            });

            await video.save();
            res.json(video);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });
};
exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find({ plan: req.body.planId }).populate('plan');
        res.json(videos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

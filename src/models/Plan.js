const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, // in days
    videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }]
}, { timestamps: true });

module.exports = mongoose.model('Plan', planSchema);

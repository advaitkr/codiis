const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }]
}, { timestamps: true });

module.exports = mongoose.model('Favourite', favouriteSchema);

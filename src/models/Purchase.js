const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    plan: { type: Schema.Types.ObjectId, ref: 'Plan', required: true },
    purchaseDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);

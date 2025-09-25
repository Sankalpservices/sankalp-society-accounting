const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    society: { type: mongoose.Schema.Types.ObjectId, ref: 'Society' },
    unit: String,
    owner: String,
    period: String,
    invoiceDate: Date,
    charges: [{ type: String, amount: Number }],
    total: Number,
    status: { type: String, enum: ['Paid', 'Unpaid'] }
});

module.exports = mongoose.model('Bill', BillSchema);

const mongoose = require('mongoose');

const SocietySchema = new mongoose.Schema({
    name: String,
    address: String,
    wings: [String],
    units: [{ number: String, owner: String, email: String }],
    charges: [{ type: String, amount: Number }],
    gstEnabled: Boolean
});

module.exports = mongoose.model('Society', SocietySchema);

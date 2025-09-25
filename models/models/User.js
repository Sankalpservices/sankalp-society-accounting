const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: { type: String, enum: ['admin', 'society-admin', 'accountant', 'resident'], default: 'resident' },
    society: { type: mongoose.Schema.Types.ObjectId, ref: 'Society' }
});

module.exports = mongoose.model('User', UserSchema);

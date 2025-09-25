const mongoose = require('mongoose');
mongoose.connection.on('error', err => { console.error('MongoDB error:', err); });
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['SuperAdmin', 'SocietyAdmin', 'Member'], default: 'Member' },
  linkedSocieties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Society' }]
});

module.exports = mongoose.model('User', UserSchema);

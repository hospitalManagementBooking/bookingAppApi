const mongoose = require('./index');


const Otp = mongoose.model('otp', new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    created_at: { type: Date, default: Date.now, expires: '5m' }
}));

module.exports = Otp;

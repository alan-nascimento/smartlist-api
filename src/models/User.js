const mongoose = require('../data');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        unique: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

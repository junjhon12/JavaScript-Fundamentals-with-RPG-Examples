// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: String,
    avatar_url: String,
    public_repos: Number,
    followers: Number,
    last_updated: { type: Date, default: Date.now }
});

// Create the Model based on the Schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
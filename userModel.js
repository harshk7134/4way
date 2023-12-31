const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true,
        select: false
    },
    token: {
        type: String,
        required: false,
        select: false
    }
});

module.exports = mongoose.model('User', userSchema);

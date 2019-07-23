const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Please enter your name'
    },
    email: {
        type: String,
        required: 'Please enter your email',
        unique: true
    },
    password: {
        type: String,
        required: 'Please enter your password'
    }
});

module.exports = mongoose.model('Users', UserSchema);
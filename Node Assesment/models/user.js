const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: { type: String, index: true, unique: true },
    password: String,
    books: { type: Array, index: true },
});
const User = mongoose.model('User', userSchema);

module.exports = User;

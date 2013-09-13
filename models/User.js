var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    pass: String
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
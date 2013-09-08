var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	pass: String
});

var UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;
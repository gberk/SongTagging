
/*
 * GET users listing.
 */

var UserModel = require('../models/User');

exports.all = function(req, res){
	UserModel.find(function(err,users){
		res.send(users);
	});
};

exports.createUser = function(req,res){
	var newUser = new UserModel(req.params);
	newUser.save(function(){
		res.send('New user created');
	});
}
var assert = require("assert");
var mongoose = require("mongoose");

var testConnection = 'mongodb://localhost:27017/test_database'

describe('Database functions: ' ,function(){
	describe('Given a connection string',function(){
		it('should connect to that database',function(done){
			mongoose.connection.on('open',done);
			
			mongoose.connect(testConnection);
		});
	});
});
var mongoose = require("mongoose");
var should = require("should");

var testConnection = 'mongodb://localhost:27017/test_database'
var connection;

describe('Database', function () {

    afterEach(function () {
        mongoose.connection.close();
    });

    describe('Given a connection string', function () {
        it('should connect to that database', function (done) {
            mongoose.connection.on('open', function () {
                mongoose.connection.close();
                done();
            });
            mongoose.connect(testConnection);
        });
    });
    
    describe('When dropping a database', function () {
        it('should drop that database');
    });
});

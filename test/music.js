var assert = require("assert");
var mongoose = require("mongoose");

var testConnection = 'mongodb://localhost:27017/test_database'

var Library = require("../controllers/library");
var MusicModels = require('../models/Music');
var Song = MusicModels.SongModel;
var Album = MusicModels.AlbumModel;

describe('Library',function(){


	before(function(){
		mongoose.connect(testConnection);
		mongoose.model();
	});

	after(function(){
		//Library.model.drop(function(){});
	});

	describe('adding a song',function(){
		it('should add a new song entity to the database',function(){
			var song = {
				title: 'test_title',
				artist: 'test_artist',
				album: 'test_album',
				tags: ['one','two','three']
			}
		});
	});

	describe('adding a song',function(){
		it('should add a new song entity to the database',function(){
			assert.equal(1,1);
		});
	});
});
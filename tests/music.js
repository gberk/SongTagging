var mongoose = require("mongoose");
var should = require("should");

var testConnection = 'mongodb://localhost:27017/test_database'

var Library = require("../controllers/library");
var MusicModels = require('../models/Music');
var Song = MusicModels.SongModel;
var Album = MusicModels.AlbumModel;

describe('Library', function () {
    
    before(function () {
        mongoose.connect(testConnection);
    });

    after(function () {
        mongoose.connection.close();
    });

    beforeEach(function () {
        Song.remove();
        Album.remove();
    });
    describe('adding a song', function () {
        it('should add a new song entity to the database', function (done) {
            var song = {
                title: 'test_title',
                artist: 'test_artist',
                album: 'test_album',
                tags: ['one', 'two', 'three']
            };

            var verifySongSaved = function () {
                Song.find(song, function (err, foundSong) {
                    should.exist(foundSong);
                    done();
                });
            };
            Library.saveSong(song, verifySongSaved);
        });
    });

    describe('adding a song', function () {
        it('should add a new song entity to the database');
    });
});
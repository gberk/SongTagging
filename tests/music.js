var mongoose = require("mongoose");
var should = require("should");

var testConnection = 'mongodb://localhost:27017/test_database'

var Library = require("../controllers/library");
var MusicModels = require('../models/Music');
var Song = MusicModels.SongModel;
var Album = MusicModels.AlbumModel;

var test_song = {
    title: 'test_title',
    artist: 'test_artist',
    album: 'test_album',
    tags: ['one', 'two', 'three']
};

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
            var verifySongSavedCallback = function () {
                Song.findOne(test_song, function (err, foundSong) {
                    should.exist(foundSong);
                    done();
                });
            };

            Library.saveSong(test_song, verifySongSavedCallback);
        });

        it('should add an album if the album does not already exist',function(done){

            Album.findOne({title:test_song.album},function(err,foundAlbum){
                should.not.exist(foundAlbum);
                console.log("Album does not exist before adding song");
            });

            Library.saveSong(test_song,function(){});

            Album.findOne({title:test_song.album},function(err,foundAlbum){
                should.exist(foundAlbum);
                done();
            });
        });
    });
});
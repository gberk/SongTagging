var MusicModels = require('../models/Music');

var Song = MusicModels.SongModel;
var Album = MusicModels.AlbumModel;

exports.songList = function (req, res) {
    Song.find(function (err, songs) {
        res.send(songs);
    });
}

exports.addSong = function (req, res) {
    var callback = function (err, item) {
        console.log('Saved song ' + item.title);
        res.send(JSON.stringify(item));
    };

    saveSong(req.body, callback);
}

exports.saveAlbum = function(albumParams, callback){
    var album = new Album(albumParams);

    album.save(callback);
}

exports.saveSong = function (songParams, callback) {
    var album = new Album({artist:songParams.artist,title:songParams.album});
    var song = new Song(songParams);

    Album.findOne(album,function(err,foundAlbum){
        if (!foundAlbum) {
            album.save(function(err,savedAlbum){
                if (err) throw err;
                song.albumId = savedAlbum.id;
                song.save(callback);
            });
        }
        else{
            song.albumId = foundAlbum.albumId;
            song.save(callback);
        }
    });
}
var MusicModels = require('../models/Music');

var Song = MusicModels.SongModel;
var Album = MusicModels.AlbumModel;

exports.songList = function(req,res){
	Song.find(function(err,songs){
		res.send(songs);
	});
}

exports.addSong = function(req,res){
	var callback = function(err,item){
		console.log('Saved song ' + item.title);
		res.send(JSON.stringify(item));
	};

	saveSong(req.body,callback);
}

exports.saveSong = function(songParams, callback){
	var song = new Song(songParams);

	song.save(callback());
}
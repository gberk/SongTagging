var MusicModels = require('../models/Music');
var Song = MusicModels.SongModel;
var Album = MusicModels.AlbumModel;

exports.songList = function(req,res){
	Song.find(function(err,songs){
		res.send(songs);
	});
}

exports.addSong = function(req,res){
	var song = new Song(req.body);

	var callback = function(err,item){
		console.log('Saved song ' + item.title);
		res.send(JSON.stringify(item));
	};
	saveSong(song,callback);
}

var saveSong = function(song, callback){
	song.save(callback());
}
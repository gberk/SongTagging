var Song = require('../models/Song');

exports.songList = function(req,res){
	Song.find(function(err,songs){
		res.send(songs);
	});
}

exports.addSong = function(req,res){
	var song = new Song(req.body);

	song.save(function(err,item){
		console.log('Saved song ' + item.title);
		res.send(JSON.stringify(item));
	});

}
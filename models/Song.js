var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
	title: String,
	artist: String,
	contributingArtists: String,
	album: String,
	albumid: String,
	tags: [String]
});


var AlbumSchema = new mongoose.Schema({
	title: String,
	artist: String,
	songs: [SongSchema],
	tags:[]
})


var SongModel = mongoose.model('Song',SongSchema);

module.exports = SongModel;
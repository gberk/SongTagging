var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
	title: String,
	artist: String,
	album: String,
	tags: [String]
});

var SongModel = mongoose.model('Song',SongSchema);

module.exports = SongModel;
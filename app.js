
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./controllers'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose'),
	User = require('./controllers/User')
	Library = require('./controllers/Library');

mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
		console.log('Database opened');
});

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//register routes

app.get('/', routes.index);

app.get('/users', User.all);

app.post('/users/:name/:pass', User.createUser);

app.get('/api/songList', Library.songList);
app.post('/api/addSong', Library.addSong);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

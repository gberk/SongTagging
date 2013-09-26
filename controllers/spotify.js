var request = require('request'),
    querystring = require('querystring'),
    spotify_configs = {
        host: "ws.spotify.com",
        searchPath: '/search/1/',
        spotifySearchType: {
            track: 'track',
            artist: 'artist',
            album: 'album'
        }
    }

var search = function(searchParams, callback){

    var url = encodeURI("http://" + spotify_configs["host"] + spotify_configs["searchPath"] + spotify_configs["spotifySearchType"][searchParams.searchType] + '.json?q=' + searchParams.query);
    
    request.get(url,callback);
}

module.exports.search = search;
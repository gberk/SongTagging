var http = require('http'),
    querystring = require('querystring'),
    spotify_configs = {
        host: "ws.spotify.com",
        searchPath: '/search/1/'
    }


var search = function(searchParams, callback){
    var context = {
        host: spotify_configs.host,
        path: searchPath + searchParams.searchType + '.json?' querystring.stringify(searchParams),
        method: "GET"
    }
    var request = http.request(context,callback);
}
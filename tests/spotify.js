var should = require("should"),
    spotify = require("../controllers/Spotify"),
    request = require("request"),
    searchParams,
    response;

describe('Spotify', function() {
    it('should load the search function',function(done){
        should.exist(spotify.search);
        spotify.search.should.be.a('function');
        done();
    });

    describe('When I search for a track', function(){
        before(function(){
            searchParams = {
                searchType: "track",
                query: "The Mother We Share"
            };
            response = '';
        })
        it('should return the response of the Spotify API', function (done){
            this.timeout(5000);

            var assertOk = function(err,res,body){
                var result = JSON.parse(body);
                should.exist(result.tracks);
                done();        
            };

            spotify.search(searchParams,assertOk);
        });
    });

    describe('When I search for an artist', function(){
        before(function(){
            searchParams = {
                searchType: "artist",
                query: "caveman"
            };
            response = '';
        })
        it('should return the response of the Spotify API', function (done){
            this.timeout(5000);

            var assertOk = function(err,res,body){
                var result = JSON.parse(body);
                should.exist(result.artists);
                done();        
            };
            spotify.search(searchParams,assertOk);
        });
    });

        describe('When I search for an album', function(){
        before(function(){
            searchParams = {
                searchType: "album",
                query: "Exile on Main Street"
            };
            response = '';
        })
        it('should return the response of the Spotify API', function (done){
            this.timeout(5000);
             var assertOk = function(err,res,body){
                var result = JSON.parse(body);
                should.exist(result.albums);
                done();        
            };
            spotify.search(searchParams,assertOk);
        });
    });
});

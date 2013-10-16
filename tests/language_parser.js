var should = require("should"),
    _ = require("underscore"),
    testPhrase,
    parser;

describe('LanguageParser',function(){
    before(function(){
        parser = new LanguageParser();
    });

    describe('Given a null phrase', function(){
        before(function(){
            testPhrase = null;
        });
        it('should return an error to the callback', function(done){
            parser.parse(testPhrase, function(err,parsedResult){
                err.should.not.be.null;
                done();
            });
        });
    });

    describe('Given the phrase {""}', function(){
        before(function(){
            testPhrase = "";
        });
        it('should return an error to the callback', function(done){
            parser.parse(testPhrase, function(err,parsedResult){
                err.should.not.be.null;
                done();
            });
        });
    });

    describe('Given the phrase {"play piano man"}',function(){
        before(function(){
            testPhrase = "play piano man";
        });
        it('should return the phrase in the callback',function(done){
            parser.parse(testPhrase, function(err,parsedResult){
                parsedResult.phrase.should.eql("play piano man");
                done();
            });
        });
        it('should identify "Play" as the command', function(done){
            parser.parse(testPhrase, function(err,parsedResult){
                parsedResult.command.should.eql("Play");
            });
        });
    });
});

function LanguageParser(){
    this.parse = function(phrase,callback){

        if(!phrase || phrase.length == 0){
            callback("ERROR: cannot parse empty or null strings");
            return;
        }
            

        phrase = phrase.toLowerCase();
        choppedPhrase = phrase.split(' ');

        var parsedResult = {
            phrase:phrase,
            command: findCommand(phrase)
        };

        callback(null,parsedResult);
        return;
    };

    findCommand = function(choppedPhrase){
        choppedPhrase.
    }

    commands = ["Play"];

}
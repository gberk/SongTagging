function searchEntered(speechEvent){
    if(speechEvent.target.value != ""){
        $('#speechInput').unbind("focus");
        //var searchParam = speechEvent.target.value.replace(/\s+/g,'');
        spotifyTrackSearch(speechEvent.target.value);
    }
}

function spotifyTrackSearch(query){
    var url = 'http://ws.spotify.com/search/1/track.json?q=' + query;
        $.ajax({
            url:url,
            dataType:"json"
        }).done(function(data){
            lastResult = data;
            console.log(data);
            appendSpotifyPlayer(data.tracks[0].href)
        });
}

function appendSpotifyPlayer(trackId){
    var spotifyPlayer = "<iframe src=\"https://embed.spotify.com/?uri="+ trackId + "\" width=\"300px\" height=\"80px\" frameborder=\"0px\" allowtransparency=\"true\"/>";
    $(".result").append(spotifyPlayer);
    $('.result').show();
}

var lastResult = "blah";

$(function(){
    $('.result').hide();
    $('#speechInput').on("focus",searchEntered);
});
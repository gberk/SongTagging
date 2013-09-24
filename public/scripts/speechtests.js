function searchEntered(speechEvent){
    if(speechEvent.target.value != ""){
        $('#speechInput').unbind("focus");
        var searchParam = speechEvent.target.value.replace(/\s+/g,'');
        var url = '/api/search/' + searchParam;
        console.log("searching " + url);
        $.ajax({
            url:url
        }).done(function(data){
            console.log(data);
        });
    }
}

var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;

recognition.onEnd = searchEntered;

$(function(){
    $('#speechInput').on("focus",searchEntered);
});
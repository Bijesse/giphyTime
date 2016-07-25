$( document ).ready(function() {
    var gif = "house";
    var request = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC";
        console.log(request);
        $.getJSON(request, function (data) {
            console.log(data);
        });
});
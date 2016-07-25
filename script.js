$( document ).ready(function() {

$("#submit").click(function(){
   var x = $("#query").val();
   var request = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC";  
   $.getJSON(request, function(response){
       for(var i = 0; i<5; i++){
       var pic = response.data[i].images.fixed_width.url;
       $('#results').append("<li>" + "<img src=" + pic + ">" + "</li>");
       }
   });
   
$("#reset").click(function(){
   $("#results").remove(); 
});
    //
});

  

    
  
});    
/*    

    
    $("#results").append( "<li>" + "<img src= " + response.data[0].images.fixed_height.url + ">" + "</li>" );
    $("#results").append( "<li>" + "<img src= " + response.data[0].images.fixed_height_downsampled.url + ">" + "</li>");
    $("#results").append( "<li>" + "<img src= " + response.data[0].images.downsized.url + ">" +  "</li>");

*/

$(document).ready(function(){
  $("#getMessage").on("click",function(){
    $.getJSON('https://thesimpsonsquoteapi.glitch.me/quotes?count=num', function(json){
	  var html = "";
	  json.forEach(function(val){
	    html += "<div>";
		html += "<p>" + val.quote + "</p>";
		html += "</div>"; 	
	    })
	$("#message").html(html);
    });	
  })
})

$(".twitter").click(function(){
      var textToTweet =$("#message").text();
      var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
      $('.twitter').attr('href',tweetLink).click(); // perform click and post quote
});

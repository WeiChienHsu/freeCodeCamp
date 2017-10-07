$(document).ready(function(){
  var stream;
  var channel, name, logo, url, content;
  var users=[ 
    "arteezy",
    "beyondthesummit",
    "w33haa",
    "ESL_SC2",
    "eternalenvyy",
    "wagamamatv",
    "freecodecamp"
  ];

users.forEach(function(user) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };

//get streams data
$.getJSON(makeURL("streams",user), function(stat){
    var game, status;
      if(stat.stream === null){
        game = "Offline";
        status ="offline";
      } else{
        game = "Online";
        status = "online";
      };

// get channels data
$.getJSON(makeURL("channels",user), function(data){
    name = data.display_name;
    logo = data.logo;
    url = data.url;
    content = data.status; 

    $("#status").prepend('<div class="col-lg-4 col-sm-6"><div class="thumbnail status"> <img src="' +logo+ '" alt="logo"><a href="'+url+'"><h4>'+name+'</h4></a><p id="content">'+content+'</p><p id="description"> Online </p></div>');
    // add description if user is online
     if(status === "online"){
       $("#description").text(content);
     };
    
    }); //channels
  }); //streams
}); //forEach
  
   
  
}); //document
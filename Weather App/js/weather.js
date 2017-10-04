var api = "https://fcc-weather-api.glitch.me/api/current?"
var lat,lon;
var tempUnit = "C";
var currentTempInCelsuis;

$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeaterInfo(lat,lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
})

function getWeaterInfo(lat,lon){ 
	//When you have actual lat and lon data
	var urlString = api+lat+"&"+lon;
		// AJAX JSON DATA
	$.ajax({
		type:"GET",
		url:urlString,
		success:function(data){
			console.log(data.name);
		}
	})	

  }
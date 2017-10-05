// var key = "apple";
// function search(key){

//   $.ajax({
// 	type:"GET",
// 	url:'https://en.wikipedia.org/w/api.php?action=query&format=json&requestid=NitinNair89&prop=extracts&indexpageids=1&generator=search&exchars=450&explaintext=1&exlimit=10&exintro=1&gsrsearch=' + key + '&gsrlimit=10&gsrqiprofile=classic&callback=?',
// 	success:function(data){
// 		console.log(data.query.page.title);
// 	}
// });
// };

// search(key);


//https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=18630637&inprop=url

//http://en.wikipedia.org/?curid=

getData("apple");

function getData(a) {
  var pageData = [], pageIDs=[];
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&requestid=NitinNair89&prop=extracts&indexpageids=1&generator=search&exchars=450&explaintext=1&exlimit=10&exintro=1&gsrsearch=' + a + '&gsrlimit=10&gsrqiprofile=classic&callback=?',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      if(!data.query) {
       document.getElementById("resultsBox").innerHTML = "<p class='text-center' style='padding:5px;margin-top:5px;'>There were no results matching the query.</p>"; 
      } else {
      pageIDs = data.query.pageids;
      pageData = data.query.pages;
      console.log(pageIDs);
      }
    
    }

  });
}


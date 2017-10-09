$(document).ready(function(){
  var breakTimeDisplay = 5,  sessionTimeDisplay = 25; //default;
  var sessionCounter = $("#sessionDisplay").text();
  var breakCounter = $("#breakDisplay").text();
 

  //CountDown session
$("#start").click(function(){
    $("#sessionMinus,#sessionPlus,#breakMinus,#breakPlus").hide();
    $("#star").html("Reset");
    var counter = setInterval(sessionTimer,1000);
   
});
  
 function sessionTimer(){
    sessionCounter -= 1;
   
   $(".displayTime").text(sessionCounter);
 }
 
  // Session Length setting
  $("#sessionMinus").on("click",function(){
    if(sessionTimeDisplay > 1){
      minusSession();
      $("#sessionDisplay").text(sessionTimeDisplay);
    } else{
    console.log("error. Time couldn't lower than 1");
      sessionTimeDisplay = 1;
    }
  });
    
  $("#sessionPlus").on("click",function(){
    if(sessionTimeDisplay <= 60){
      plusSession();
      $("#sessionDisplay").text(sessionTimeDisplay);
      
    } else{
      console.log("error. Time couldn't pass 60");
    }    
  });
  
  function plusSession(){
    sessionTimeDisplay += 1;
  };
  
  function minusSession(){
    sessionTimeDisplay -=1;
  }
  
  
  
  // break Length setting
  $("#breakMinus").on("click",function(){
    if(breakTimeDisplay > 1){
      minusBreak();
      $("#breakDisplay").text(breakTimeDisplay);
    } else{
    console.log("error. Time couldn't lower than 1");
      breakTimeDisplay = 1;
    }
  });
    
  $("#breakPlus").on("click",function(){
    if(breakTimeDisplay <= 60){
      plusBreak();
      $("#breakDisplay").text(breakTimeDisplay);
    } else{
      console.log("error. Time couldn't pass 60");
    }    
  });
  
  function plusBreak(){
    breakTimeDisplay += 1;
  };
  
  function minusBreak(){
    breakTimeDisplay -=1;
  }
  
 
}) //document 
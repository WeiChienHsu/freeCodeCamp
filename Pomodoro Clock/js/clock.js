$(document).ready(function(){
  var breakTimeDisplay = 5,  sessionTimeDisplay = 25; //default;

 // click Reset
  
  

  //CountDown session
$("#start").click(function(){ 
// need to put all function in this local area!!!
 
    $("#sessionMinus,#sessionPlus,#breakMinus,#breakPlus,#start").hide();
    $("#status").prepend('<button id="reset">Reset</button>');
    var counter = setInterval(sessionTimer,1000);


  
 function sessionTimer(){
   if(sessionTimeDisplay === 0){
     clearInterval(counter);
     var startBreak = setInterval(breakTimer,1000);
   }else{
   sessionTimeDisplay -= 1;
   $(".displayTime").text(sessionTimeDisplay);
     }
 }
  
  function breakTimer(){
    $(".displayTitle").text("Break");
    $(".displayTime").text(breakTimeDisplay);
    if(breakTimeDisplay === 0){
      clearInterval(startBreak);
    }
    breakTimeDisplay -= 1;
    $(".displayTime").text(breakTimeDisplay);
  }
  
 });
  
  
  // Session Length setting
  $("#sessionMinus").on("click",function(){
    if(sessionTimeDisplay > 1){
      minusSession();
      $("#sessionDisplay,.displayTime").text(sessionTimeDisplay);
    } else{
    console.log("error. Time couldn't lower than 1");
      sessionTimeDisplay = 1;
    }
  });
    
  $("#sessionPlus").on("click",function(){
    if(sessionTimeDisplay <= 60){
      plusSession();
      $("#sessionDisplay,.displayTime").text(sessionTimeDisplay);
      
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
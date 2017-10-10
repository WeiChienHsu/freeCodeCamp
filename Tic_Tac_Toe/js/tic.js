var record = [0,1,2,3,4,5,6,7,8];
var player1 = "O";
var player2 = 'X';
var choseId;
// var turn = player2;
var aiRecord;
var turn;

chooseOX();

function checkPlayer(){
if(record.filter(function(x){return x=="O"}).length > record.filter(function(x){return x=="X"}).length ){
		return player2;
	}else{
		return player1;
	} // to change between O and X
}

function chooseOX(){
	$("table,#startGame,#replay").hide();
	//choose O
	$("#O").on("click",function(){
		
		$("#startGame").show();
		return turn = player1;

	})


	//choose X

}

$(".cell").on("click",function(){
	// var turn = player1; //choose O or X to start;
	choseId = $(this).attr('id');
	$(this).text(turn);
	record[choseId] = turn;
	// player play
	aiRecord = record.filter(function(x){return x!=="O" && x!=="X"});
	// give a new array for ai chooseing
	turn = checkPlayer();
	var random = aiRecord[Math.floor(Math.random()*(aiRecord.length))];
	
	record[random] = turn;
	$(".cell").eq(random).text(turn);
	turn = checkPlayer();
});


$("#startGame").on("click",function(){
	$(".cell").text("");
	$("#O,#X").hide();
	record = [0,1,2,3,4,5,6,7,8];
	aiRecord = [0,1,2,3,4,5,6,7,8];
	$("table").show("slow");
	// $("#status").prepend('<button id="replay"> Replay </button>');
	// need to reset the game
	$("#startGame").hide();
	$("#replay").show();
})

$("#replay").on("click",function(){
	chooseOX();
	$("#O,#X").show(50);
	
});


// function whoWin(){
// 	if()
// }




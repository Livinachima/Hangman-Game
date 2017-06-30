var Main = {}
var Words = {};
var Word = {}
Words.List = [];
Main.WordArray =[]
Main.WordUArray = []



Main.Lives = 5
Main.NumInWordBank = Words.Length;

Main.Word = "code";
Main.WordU = "";



Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random() * Main.NumberInWordbank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	for(var i= 0; i<Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("SPELLING").innerHTML = Main.WordU;
	document.getElementById("numAlphabets").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(alphabets){
	Main.Changes = 0;
	for(var i = 0; i<Main.WordArray.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == alphabets){
			Main.WordUArray[i] = alphabets;
			Main.Changes += 1;
			Main.WordU() = Main.WordUArray.join("");
			document.getElementById("SPELLING").innerHTML = Main.WordU;
			
		}
	}
	
	if(Main.Changes < 1){
		Main.Lives -=1
		document.getElementById("Guess").innerHTML = Main.Lives;
	}
	
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("SPELLING").innerHTML = Main.WordU;
	
	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordArray.join("");
	
	if(Main.Word1 == Main.Word2){
		alert("You Won!");
		window.location.reload();
	}
	
	if(Main.Lives < 1){
		document.getElementById("SPELLING").innerHTML == Main.Word1;
		alert("Number of Guesses Completed. Please Try Again.");
		window.location.reload();
	}
}

Main.PullWord();

$(function(){
	$("#a").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("a");
	});
	}
);

$(function(){
	$("#b").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("b");
	});
	}
);

$(function(){
	$("#c").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("c");
	});
	}
);

$(function(){
	$("#d").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("d");
	});
	}
);

$(function(){
	$("#e").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("e");
	});
	}
);

$(function(){
	$("#f").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("f");
	});
	}
);

$(function(){
	$("#g").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("g");
	});
	}
);

$(function(){
	$("#h").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("h");
	});
	}
);

$(function(){
	$("#i").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("i");
	});
	}
);

$(function(){
	$("#j").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("j");
	});
	}
);

$(function(){
	$("#k").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("k");
	});
	}
);

$(function(){
	$("#l").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("l");
	});
	}
);

$(function(){
	$("#m").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("m");
	});
	}
);

$(function(){
	$("#n").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("n");
	});
	}
);

$(function(){
	$("#o").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("o");
	});
	}
);

$(function(){
	$("#p").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("p");
	});
	}
);

$(function(){
	$("#q").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("q");
	});
	}
);

$(function(){
	$("#r").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("r");
	});
	}
);

$(function(){
	$("#s").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("s");
	});
	}
);

$(function(){
	$("#t").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("t");
	});
	}
);

$(function(){
	$("#u").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("u");
	});
	}
);

$(function(){
	$("#v").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("v");
	});
	}
);

$(function(){
	$("#w").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("w");
	});
	}
);

$(function(){
	$("#x").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("x");
	});
	}
);

$(function(){
	$("#y").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("y");
	});
	}
);

$(function(){
	$("#z").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter("z");
	});
	}
);
	


Words.List[0] = "";
Words.List[1] = "";
Words.List[2] = "";
Words.List[3] = "";
Words.List[4] = "";
Words.List[5] = "";
Words.List[6] = "";
Words.List[7] = "";
Words.List[8] = "";
Words.List[9] = "";




Words.List[0] = "madonna";
Words.List[1] = "beyonce";
Words.List[2] = "taylor swift";
Words.List[3] = "elvis";
Words.List[4] = "eminem";
Words.List[5] = "michael jackson";
Words.List[6] = "katy perry";

Words.List[7] = "jerry seinfeld";
Words.List[8] = "dave chappelle";
Words.List[9] = "bill cosby";
Words.List[8] = "robin williams";
Words.List[9] = "chris rock";

Words.List[10] = "leonard dicaprio";
Words.List[11] = "johnny depp";
Words.List[12] = "denzel washington";
Words.List[13] = "brad pitt";
Words.List[14] = "robert de niro";




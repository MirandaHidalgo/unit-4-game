$(document).ready(function() {

	var RandomNumber = [];

	for (var r = 19; r < 121; r++) {
		RandomNumber.push(r);
	}

	var crystals = [];

	for (var c = 1; c < 13; c++) {

		crystals.push(c);
	}

	var randNumber; 
	var crystalNumbers = []; 

	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;

  var userScore = 0; 

	var wins = 0;
	var losses = 0;

	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} 

	function randomCrystalChoice(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
		console.log("crystal numbers: " + crystalNumbers);

	} 

	function crystalNumberVal(arr) {

		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		crystal1 = arr[0];
		crystal2 = arr[1];
		crystal3 = arr[2];
		crystal4 = arr[3];
	}

	function newGame(x) {

		crystalNumbers = []; 

		pickRandomNumber(RandomNumber);

		randomCrystalChoice(crystals);

		crystalNumberVal(crystalNumbers);

		userScore = 0;
		$("#totalNumber").html(userScore);

		alert(x);
	} 

	pickRandomNumber(RandomNumber); 
	randomCrystalChoice(crystals);
	crystalNumberVal(crystalNumbers);

		$("#button-1").on("click", function() {

			userScore += crystal1;
			$("#totalNumber").html(userScore);
		});

		$("#button-2").on("click", function() {

			userScore += crystal2;
			$("#totalNumber").html(userScore);
		});

		$("#button-3").on("click", function() {

			userScore += crystal3;
			$("#totalNumber").html(userScore);
		});

		$("#button-4").on("click", function() {

			userScore += crystal4;
			$("#totalNumber").html(userScore);
		});

	$("button").on("click", function() {
		if (userScore == randNumber) {

			wins++;
			console.log(userScore);
			$("#totalNumber").html(userScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {newGame("It's whatever you lost")}, 200);
		}

		else if (userScore > randNumber){

			losses++;
			$("#totalNumber").html(userScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {newGame("WHAT A LOSER!")}, 200);
		}
	});

}); 
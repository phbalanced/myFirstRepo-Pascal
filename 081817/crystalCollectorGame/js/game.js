//sets up random number user is trying to match
	$( document ).ready(function(){
		var Random = Math.floor(Math.random() * 101+19); 
		/* I used Dreamweaver a lot at home as my GUI to build websites, and this line keeps giving me a "Missing 'use strict' statement on this line, but I didn't think we had to use the "===" operator when declaring variables. Am I mistaken by that? */
		console.log(Random);
		$('#number').text(Random);

//setting up four random numbers array, total variable and printing the wins & losses variables	
	var GeneratedNumbers = [];
	var total = 0;	
	var wins = 0;
	var losses = 0;
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);		


//sets up random numbers for each jewel
function fourRandomNumbers(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random() * 11+1);
		GeneratedNumbers.push(num);
	}
	console.log(GeneratedNumbers); 
}

fourRandomNumbers(); //runs the function


//resets the game
function reset(){
        Random = Math.floor(Math.random() * 101+19);
        console.log(Random);
        $('#number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#Combined').text(total);
} 

//adds the wins to the total
function winner(){
	alert("You are a Winner!!!");
		wins++;	
		$('#numberWins').text(wins);
		reset();
}

//adds the losses to the total
function loser(){
	alert ("Sorry, you lost. Try again.");
		losses++;
		$('#numberLosses').text(losses);
		reset();
}

		//sets up click for jewels
		$('#one').on ('click', function(){ //Number to Match
			total = total + GeneratedNumbers[0];
			console.log("New total= " + total);
			$('#Combined').text(total);	

					//sets win/lose conditions
					if (total === Random){
						winner();
					}
					else if ( total > Random){
						loser();
					}		
		});	

		$('#two').on ('click', function(){ //Your Total Score
			total = total + GeneratedNumbers[1];
			console.log("New total= " + total);
			$('#Combined').text(total);	

					if (total === Random){
						winner();
					}
					else if ( total > Random){
						loser();
					}	
		});	

		$('#three').on ('click', function(){ //Wins
			total = total + GeneratedNumbers[2];
			console.log("New total= " + total);
			$('#Combined').text(total);

					//sets win/lose conditions
					if (total === Random){
						winner();
					}
					else if ( total > Random){
						loser();
					}	
		});	

		$('#four').on ('click', function(){ //Losses
			total = total + GeneratedNumbers[3];
			console.log("New total= " + total);
			$('#Combined').text(total);	

				
					if (total === Random){
						winner();
					}
					else if ( total > Random){
						loser();
					}
		});  	

});	
	

//variables
var wins = 0; //the user hasn't won any games ye
var losses = 0;
var lettersGuessed = []; //as player guesses they can push wrong letters into this array
var workBank = ['Superman','Batman', 'Spider Man','Wonder Woman', 'Captain America'];
var currentWord; //var currentWord = ''; 
var guessesRemaining = 10; //the user can make 10 incorrect guesses before they lose
var usersGuess;

//wins
//losses
//letters guessed
//list of words in the game
//current word
//user's guess
//guesses remaining

//methods
//load new word (start game)
	//on browser load
	//on 'new' button press
	//on finishing a word



//display word blanks (select a word from work bank)
	//program logic
	//randomly pull a word from the bank and assign it to the 'current word' variable
	
	//browser display (query selector to manipulate the DOM)
	//display the number of blanks equal to number of letters in that word

//capture user input
	//listen to a keyup event
	//run logic to check whether that letter exists in the current word
	//change guesses remaining letters guessed
	//check if the word is now complete
		//run win game logic
	//check if user still has guesses remaining
		//run users logic

function handlerUserInput() {
	document.addEventListener('keyup', function(event) {
		console.log(event);
		console.log(event.key); //k
	});
}

handlerUserInput();

//function unnamedFunction {
	//declaration where logic is written 


//$(document).on('ready', function() {
	//unnamedFunction(); //call so that logic is executed
				


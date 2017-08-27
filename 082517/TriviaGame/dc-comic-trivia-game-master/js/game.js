//sweet Jesus, creating this file did not come without its fair share of frustration, tears, screaming, and endless
//Googling, but I FINALLY got it work after almost giving up soooooooooo many times

$(document).ready(function() {
// Function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Creates function, generateHTML(), that is triggered by the start button, and generates the HTML.

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // Bruce said to always use this every single time
	clickSound.play(); //plays a click sound when user chooses an answer
	generateHTML();

	timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer is " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>"; //x.png is giant X for wrong answer
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  wait 4 seconds before going to next question
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! You got it! The answer is " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  wait 4 seconds before going to next question
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); //  wait 4 seconds before going to next question
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML); //takes each answer option out of the answer array and assigns it to A, B, C, or D
}

function wait() {
	if (questionCounter < 9) { //10 questions total; set to < 9
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000); //set to 30 seconds at an interval of one second
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
} //timer is set to 30 seconds. will timeout after 30 seconds and count the answer as unanswered

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Quiz completed. Below shows your score!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset the Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;

//QUESTIONS ARRAY
var questionArray = ["Who killed Thomas and Martha Wayne?", "Who paralyzed Barbara Gordon, the Police Commissioner's wife?", "Connor Hawke is the son of…", "Which one of these villains was elected as the President of the United States?", "Where does Nth metal come from?", "Who adopted the alias “Siegfried the Speedster”?", "What is Batman Incorporated?", "Who killed Superman?", "Which Superhero lost his father in a plane crash at an early age?", "Which villain discovered Batman’s secret identity by deduction?"];

//ANSWER ARRAY
var answerArray = [["Joe Macy", "Joe Chill", "Joe Blow", "Joe Mama"], ["Antiope","The Joker","Jim Gordon","Beyonce Knowles"], ["Oliver Queen", "Barry Allen", "Hawk Man", "Katy Perry"], ["Harvey Dent","Stephen King","Basil Karlo aka Clayface","Lex Luthor"], ["Krypton", "Mars", "Thanagar", "Venus"], ["Jay Garrick","Barry Allen","Allen Wrench","Barry White"], ["Where Batman clones are created", "Army of Bat-Bot’s", "Company of Batman’s clothing line", "Global crime-fighting organization"], ["Darkseid","Doomsday","Supergirl","Bitch Face"], ["The Flash","Aquaman","Green Lantern","Cyborg"], ["Hugo Strange","Jonathan Crane","Private Investigator","Facebook Secret Agent"]];

//IMAGE ARRAY
var imageArray = ["<img class='center-block img-right' src='img/JoeChill-Batman.jpg'>", "<img class='center-block img-right' src='img/TheJoker-BarbaraGordon.jpg'>", "<img class='center-block img-right' src='img/ConnorHawke-OliverQueen.jpg'>", "<img class='center-block img-right' src='img/LexLuthor-President_Superman.jpg'>", "<img class='center-block img-right' src='img/NthMetal-Thanagar_Thor.jpg'>", "<img class='center-block img-right' src='img/JayGarrick_Siegfried-Speedster.jpg'>", "<img class='center-block img-right' src='img/BatmanIncorporated.jpg'>", "<img class='center-block img-right' src='img/Doomsday_KilledSuperman.jpg'>", "<img class='center-block img-right' src='img/GreenLantern_LostFatherPlaneCrash.jpg'>", "<img class='center-block img-right' src='img/HugoStrange_BatmanIdentity.jpg'>"];

//CORRECT ANSWERS AND LETTER ASSIGNED TO EACH
var correctAnswers = ["B. Joe Chill", "B. The Joker", "A. Oliver Queen", "D. Lex Luthor", "C. Thanagar", "A. Jay Garrick", "D. Global crime-fighting organization", "B. Doomsday", "C. Green Lantern", "A. Hugo Strange"];

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

var clickSound = new Audio("sound/button-click.mp3"); //I know click sounds can be irritating, but I thought it might be cool to try out since I ran across how to do when researching another issue/problem

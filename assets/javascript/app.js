//Define and assign global variables
var userinput;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 31;
var intervalId;



//When button, "Start" is clicked, timer begins
$(document).ready(function(){
	$("#start").click(function(){
	 $(this).hide();
	$(".timer").addClass("timeleft");
	start();
	$(".content").show();
	});
});


//Reset timer
function reset(){
	time = 31;
}

//Starts timer
function start() {
  intervalId = setInterval(count, 1000);
  console.log(intervalId)
};

//Gives the interval of the count/timer
function count() {
  	time--;
  	$(".timer").html("Time Remaining: " + time);

		if(time === 0){
	  		reset()
  		}
};


function check(){
	
}







//After the "Start" button is clicked, show question with posibble answers while the timer is slowly decreasing

//If an answer is answered correct or incorrect, show screen saying either correct or incorrect and pause timer
//This is where you increment or deincrement the variables "Correct" or "Incorrect"

//Without user input, move onto the next question and resume the timer

//When time runs out for current question, say, "out of time"
//This is where you increment the variable "Unanwsered question"
//Without user input, moves onto the next question and restarts timer

//When the user gets through all of the questions, show "correct answers, incorrect answers and unanswered questions"
//Then say, startover?
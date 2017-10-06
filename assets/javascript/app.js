//Define and assign global variables
var checked = false;
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
	$("#done").show();
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
	  		clearTimeout(intervalId);
  		}
};


//This function is executed after the button, "Done" is clicked

function check(){
	
	var type = document.getElementsByName("q");
	var len = type.length;
	
for (i = 0; i < len; i++) {
		console.log(q.value)
	}
	
	

	// if(){
	// 	incorrect++;
	// }

	// if(checked){
	// 	unanswered++
	// }
}

//When button, "Done" is clicked, it hides the button and calls the "check function"

	$("#done").click(function(){
	$(this).hide();
	$(".content").hide();
	clearTimeout(intervalId);
	$(".timer").hide();
	check();
	});
});




//After the "Start" button is clicked, show question with posibble answers while the timer is slowly decreasing

//If an answer is answered correct or incorrect, show screen saying either correct or incorrect and pause timer
//This is where you increment or deincrement the variables "Correct" or "Incorrect"

//Without user input, move onto the next question and resume the timer

//When time runs out for current question, say, "out of time"
//This is where you increment the variable "Unanwsered question"
//Without user input, moves onto the next question and restarts timer

//When the user gets through all of the questions, show "correct answers, incorrect answers and unanswered questions"
//Then say, startover?
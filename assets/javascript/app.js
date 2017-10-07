//Define and assign global variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 31;
var intervalId;

//Starts timer
function start() {
  intervalId = setInterval(count, 1000);
};

//Gives the interval of the count/timer
function count() {
  	time--;
  	$(".timer").html("Time Remaining: " + time);

		if(time === 0){
	  		clearTimeout(intervalId);
	  		$(".timer").hide();
	  		$(".content").hide();
	  		$("#done").hide();
	  		check();
  		};
};



//When button, "Start" is clicked, timer begins and is shown up on top and hides the button and shows the question

$(document).ready(function(){
	$("#start").click(function(){
	$(this).hide();
	$(".timer").addClass("timeleft");
	start();
	$(".content").show();
	$("#done").show();
});


//This function is executed after the button, "Done" is clicked to see if the person check the radio inputs. Checks if the user inputs are the correct answer

function check(){
	console.log(form[0])
// 	var type = document.getElementsByName("q");
// 	var len = type.length;
// 	var x;

// 	for (var i = 0; i < len; i++) {
// 		x = document.getElementById("answer").checked;
// 	}


//     if(){
//     	correct++;
//     	console.log(correct)
//     }
	
// 	else {
// 		unanswered++;
// 		console.log(unanswered)
// 	}
};

//When button, "Done" is clicked, it hides the button and calls the "check function"

	$("#done").click(function(){
	$(this).hide();
	$(".content").hide();
	clearTimeout(intervalId);
	$(".timer").hide();
	check();
	});
});


//Define and assign global variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 46;
var intervalId;
var notanswered;

//Uploads results to the HTML
function uploadresult(){
	$("#results").show();
	$("#results").html("Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" +"unanswered: " + unanswered + "<br>");
};

//see if the person check the radio inputs. Checks if the user inputs are the correct answer
function check(){

	var radios = document.getElementsByTagName('input');
	var value;
		for (var i = 0; i < radios.length; i++) {
    		if (radios[i].type === 'radio' && radios[i].checked) {
			        value = radios[i].value;
			        	if(value==='1'){
			        		correct++;
			        	} else {
			        		incorrect++;
			        	}
			    } 
		}

notanswered = $("#question1 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question2 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question3 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question4 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question5 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question6 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question7 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question8 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question9 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	notanswered = $("#question10 input").is(':checked');
	if(!notanswered){
		unanswered++;
	}

	// var radios = $("#question9, #question10 input")
	// 	var value;
	// 		for (var i = 0; i < radios.length; i++) {
	//     		if (!(radios[i].checked)){
	// 			    	unanswered++;
	// 			    }
	// 		}

uploadresult();
};



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


//When button, "Done" is clicked, it hides the button and calls the "check function"
$("#done").click(function(){
	$(this).hide();
	$(".content").hide();
	clearTimeout(intervalId);
	$(".timer").hide();
	check();
	});
});
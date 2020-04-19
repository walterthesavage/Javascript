// JavaScript Document
var correctAnswer;

function createEquation(){
	var randomNumber1 = Math.floor(Math.random() * 25) + 1;
	var randomNumber2 = Math.floor(Math.random() * 25) + 1;
	correctAnswer= randomNumber1 + randomNumber2;
	document.getElementById("equation").innerHTML=" "+randomNumber1+' + '+randomNumber2+" "
}

function checkAnswer() {
	var answer=document.getElementById("answer").value;
	if (correctAnswer==answer){
		alert("You are a maths wizard!");
	}
	else{
		alert("Sorry you weren't correct this time. Try again!");
	}
	createEquation();
}
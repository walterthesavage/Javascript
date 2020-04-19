// JavaScript Document
alert('JS is Active');

function checkAnswers() {
	var score = 0;
	if (checkboxFortran.checked){
		score++;
	}
	if (checkboxPascal.checked){
		score++;
	}
	if (checkboxAssemble.checked){
		score++;
	}
	if (checkboxSamson.checked){
		score++;
	}
	if (checkboxWozniak.checked){
		score++;
	}
	if (checkboxGates.checked){
		score++;
	}
	alert('You Scored: ' + score)
	output_score.innerHTML = 'Score: ' + score;
}
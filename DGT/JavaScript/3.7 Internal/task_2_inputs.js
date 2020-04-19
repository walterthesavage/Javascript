// JavaScript Document

alert("JS is attached");

function checkAge(){
	var age = document.getElementById('age_input').value;
	
	if (isNaN(age) || (age == '')) {
		document.getElementById('error_message').innerHTML='Please enter a valid number';
	} else if (age > 130) {
		document.getElementById('error_message').innerHTML='There is no one older than 130!';
	} else if (age < 0) {
		document.getElementById('error_message').innerHTML='You cant be that young!';
	} else if (age >= 18 && (age < 130)){
		document.getElementById('error_message').innerHTML='You are old enough to go partying!';
	} else if (age < 18){
		document.getElementById('error_message').innerHTML='You are too young to go partying!';
	}
	var cellPhone = document.getElementById("cellphoneInput").value;
	document.getElementById("output_cellphone").innerHTML='Your cellphone number is: ' + cellPhone;
}
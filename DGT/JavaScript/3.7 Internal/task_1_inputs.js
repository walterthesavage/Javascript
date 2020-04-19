// JavaScript Document

function outputName(){
	var firstName = document.getElementById('firstNameInput').value;
	var lastName = document.getElementById('lastNameInput').value;
	alert(firstName + " " + lastName);
	document.getElementById("name_output").innerHTML=firstName + " " + lastName;
}
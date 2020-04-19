// JavaScript Document
function checkInputs() {
	alert("Function is now running");
	var emailAddress = document.getElementById('userEmail').value;
	var date = document.getElementById('dateInput').value;
	alert('Email: '+ emailAddress + 'Date '+ date);
	
	if(userEmail =="" || !userEmail.checkValidity()){
		alert('Please enter a valid email');
		return;
		}
	
	if (document.getElementById('dateInput').validity.valuemissing || document.getElementById('dateInput').validity.rangeUnderflow){
		alert('Please enter a valid pickup date')
		return;
	}
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyy = today.getFullYear();
if (dd < 10){
	dd = '0' + dd
}
if (mm < 10){
	mm = '0' + mm
}
today = yyy + '-' + mm + '-' + dd;
document.getElementById('dateInput').setAttribute('min', today);
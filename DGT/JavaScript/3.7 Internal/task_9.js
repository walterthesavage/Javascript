function checkForm() {
    alert("Function is working!")
    var age = document.getElementById("ageInput").value;

    if (document.getElementById("firstNameInput").validity.patternMismatch || document.getElementById("firstNameInput").validity.valueMissing) {
        alert("Please enter a valid name");
        firstNameInput.style.backgroundColor = 'pink';
        document.getElementById("errorMessage1").innerHTML = "Please enter in a valid name";
        return;
    }
    else if (document.getElementById("lastNameInput").validity.patternMismatch || document.getElementById("lastNameInput").validity.valueMissing) {
        alert("Please enter a last name");
        lastNameInput.style.backgroundColor = 'pink';
        document.getElementById("errorMessage2").innerHTML = "Please enter in a last name";
        return;
    }
    else if (document.getElementById("ageInput").validity.valueMissing || document.getElementById("ageInput").validity.rangeUnderflow || document.getElementById("ageInput").validity.rangeOverflow) {
        alert("Please enter in a valid age");
        ageInput.style.backgroundColor = 'pink';
        document.getElementById("errorMessage3").innerHTML = "Please enter in a valid age";
        return;
    }
    else {
        alert( firstName + " " + lastName + " " + age);
        document.getElementById("nameOutput").innerHTML = document.getElementById("firstNameInput").value + " " + document.getElementById("lastNameInput").value;
        document.getElementById("ageOutput").innerHTML = document.getElementById("ageInput").value;
    }
}
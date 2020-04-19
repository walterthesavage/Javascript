function checkElegibility(){
    alert("running");
    if(!(ageY.checked || ageN.checked)) {
        alert("Please tick a box to indicate wether you are older than 16 1/2.")
    } if (!(timeY.checked || timeN.checked)){
        alert("Please tick a box to indicate wether you have held your learners lisence for 6 months or not." );  
    }
    alert("yeet");
    if (ageY.checked && timeY.checked) {
        outDiv.innerHTML = "<h3>You are elegible for a restricted licence.</h3><br><p>Please visit <u><b><a id='licenceLink' target='blank' style='font-size:22px;' href='https://drice.govt.nz/get-your-restricted/find-out-about-the-test/what-to-do-before-the-test/'>this</a></b></u> link to book a test</p>";
    
    } else {
        outDiv.innerHTML = "<h2 style='color:red'>Sorry you are not elegible for a restricted licence:</h2>"
         if (ageN.checked) {
            outDiv.innerHTML += "<br><h3>You must be over 16 1/2 years to qualify</h5>";
         } if (timeN.checked) {
            outDiv.innerHTML += "<br><h3>Ypu must have had you learners for 6 months to qualify for a restricted licence";
         }
    }
}

function updateButton() {
    if ((ageY.checked || ageN.checked) && (timeY.checked || timeN.checked)) {
        getElegibilityButton.disabled = false;
    } else {
        getElegibilityButton.disabled = true;
    }
}
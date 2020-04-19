//Javascript Document

//global variable
var calsBurned;

function selectExercise() {
    alert('running');
    //Calculate calories burned and get name of exercise to output in scentence
    calsBurned = Math.round(this.dataset.calories * weightInput.value);
    //finds the text content of the button clicked
    var exercise = this.textContent;
    outputBurn.innerHTML = exercise + ' burns ' + calsBurned + ' calories in 1 hour ';
}

//Add event listners to exercise tiles by using for loop
var tiles = document.getElementsByClassName('exercise-tile');
for (var i = 0; i < tiles.length; i++){
    //if a tile is clicked, it calls the selectExercise function
    tiles[i].addEventListener('click', selectedExercise);
}
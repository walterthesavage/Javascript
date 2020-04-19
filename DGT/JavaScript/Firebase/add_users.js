//global variables
var database = firebase.database(); //creating the link to your database
var usersRef = database.ref('users'); //creates a reference point to firebase, user node

function checkInputs() {
    alert("testing 123");
    var userName = userNameInput.value; //stores inputs
    var userEmail = userEmailInput.value; //stores inputs
    alert("I have now stored your inputs as variables!") //tests it has stored the inputs
    alert(userName + userEmail) //testing that the inputs have been stored as new variables
    if (userName == "") { //checking if the
        alert("Please enter a valid user name"); //test alert
        return; //forces the user to fix their errors - the function will stop running
    }
    alert('email');
    if (userEmail == "") { //checks validty of email address
        alert("Please enter a valid email"); //if empty or invalid then prints error message to help the user with functionality
        return; //forces the user to fixc their errors - the function will stop running
    }
    pushData(); //if the data has been entered correctly, it will then call the push data function
}

function pushData() {
    var userName = userNameInput.value; //stores inputs
    var userEmail = userEmailInput.value; //stores inputs
    alert('pushed');
    var data = { //creating a JSON file to be sent over the web
        email:userEmail, //email will be next feild name
        user_name:userName //creating a key pair user_name will be the name of the field in your database
    }
    alert("data should now be updated!")//test output
    usersRef.push(data) //pushing the data to firebase, this data will be stored under the users node

    document.getElementById('confirmOverlay').style.height = "100%"; //display confirm the overlay
    setTimeout(function(){ //sets a timer of 3 seconds and will then refresh the page
            location.reload();
        }, 3000);
}//function ends
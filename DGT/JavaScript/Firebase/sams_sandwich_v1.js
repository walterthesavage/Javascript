alert("js is attached");//test alert

function loopForm(form) {
    alert("Check your order please"); //test alert
    var sandwichOrder = []; //defines an empty list
    for ( var i =0; i < form.elements.length; i++) { //for loop through the form
        if(form.elements[i].typr == "radio" ) {
            if (form.elements[i].checked ) {
                sandwichOrder.push( form.elements[i].value);
                alert(sandwichOrder);//test alert
            }
        }
        if (form.elements[i].type == "checkbox"){
            if (form.elements[i].checked){
                sandwichOrder.push(form.elements[i].value + ' ');
                alert(sandwichOrder);//test alert
            }
        }
        //once the for loop has gone through each element in the form
        //it will output the list using the DOM
        document.getElementById("radioResults").innerHTML = sandwichOrder;
    }
}
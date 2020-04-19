function checkForm() {
    alert("test")
    var addItems = document.getElementsByClassName('addCheck');
    var checkedAddItems = [];
    var addCost = 0;
    for (var i = 0; i < addItems.length; i++) {
        if (addItems[i].checked ) {
            checkedAddItems.push(' ' + addItems[i].value );
            alert(checkedAddItems);
            addCost += Number( addItems[i].dataset.price);
            alert(addCost);
        }
    }
    outputDIV.innerHTML= checkedAddItems + "<br>" + ' Total cost $'  + addCost;
}
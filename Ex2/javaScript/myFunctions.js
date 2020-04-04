var addButton = document.getElementById("addButton");
var myTable = document.getElementById("mainTable");


addButton.setAttribute('onclick', 'addCell()');

function addCell(){

    let newRow = document.createElement('tr');
    let newCell = documet.createElement('td');

    myTable.setAttribute('background-color', 'green');

}

function helloWorld(){

    alert( 'Hello, world!' );
  
}
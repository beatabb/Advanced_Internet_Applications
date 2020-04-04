var addButton = document.getElementById("addButton");
var myTable = document.getElementById("myTable");


addButton.setAttribute('onclick', 'addCell()');

function addCell(){

    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow   = tableRef.insertRow();
    var author  = newRow.insertCell(0);
    var title  = newRow.insertCell(1);
    var third  = newRow.insertCell(2);

    //var newText  = document.createTextNode('New row');
    author.append(document.createElement('input'));
    title.append(document.createElement('input'));

    var saveButton = document.createElement('button');
    saveButton.innerHTML = "Save";

    third.appendChild(saveButton);

    var removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";

    third.appendChild(removeButton);
    
}

function helloWorld(){

    alert( 'Hello, world!' );
  
}
var addButton = document.getElementById("addButton");
var myTable = document.getElementById("myTable");


addButton.setAttribute('onclick', 'addRow()');
saveButton.setAttribute('onclick', 'saveRow()');
removeButton.setAttribute('onclick', 'removeRow()');
editButton.setAttribute('onclick', 'editRow()');

function addRow(){

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
    saveButton.setAttribute('onclick', 'saveRow(this)');
    saveButton.setAttribute('class', 'saveButton');
    saveButton.setAttribute('type', 'button');

    third.appendChild(saveButton);

    var removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.setAttribute('onclick', 'removeRow(this)');
    removeButton.setAttribute('class', 'removeButton');
    removeButton.setAttribute('type', 'button');

    third.appendChild(removeButton);
    
}

function saveRow(button){

    
    let numb = button.parentNode.parentNode.rowIndex;
    alert(numb);

}

function removeRow(){

    let numb = button.parentNode.parentNode.rowIndex;
    alert(numb);

}

function editRow(){

    let numb = button.parentNode.parentNode.rowIndex;
    alert(numb);
    
}

function helloWorld(){

    alert( 'Hello, world!' );
  
}
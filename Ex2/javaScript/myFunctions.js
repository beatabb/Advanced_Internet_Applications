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

function getValue(cell){
    return cell.childNodes[0].value;
}

function deleteValuesFromCell(cell){

    while (cell.firstChild) {
        cell.removeChild(cell.lastChild);
      }
}

function setValue(cell, value, type){
    
    let temp = document.createElement(type);
    temp.innerHTML = value;
    cell.appendChild(temp);
}

function setValueButton(cell, buttonClass, buttonOnclick, value){

    var newButton = document.createElement('button');
    newButton.innerHTML = value;
    newButton.setAttribute('onclick', buttonOnclick);
    newButton.setAttribute('class', buttonClass);
    newButton.setAttribute('type', 'button');

    cell.appendChild(newButton);
}

function saveRow(button){
    
    let numb = button.parentNode.parentNode.rowIndex;

    let theTable = document.getElementById("myTable");
    let theRow = theTable.rows[numb];
    let authorCell = theRow.cells[0];
    let titleCell = theRow.cells[1];
    let thirdCell = theRow.cells[2];

    let newAuthorValue = getValue(authorCell);
    let newTitleValue = getValue(titleCell);

    deleteValuesFromCell(authorCell);
    deleteValuesFromCell(titleCell);
    deleteValuesFromCell(thirdCell);

    setValue(authorCell, newAuthorValue, 'label');
    setValue(titleCell, newTitleValue, 'label');
    setValueButton(thirdCell, 'editButton', 'editRow(this)', 'Edit');
    setValueButton(thirdCell, 'removeButton', 'removeRow(this)', 'Remove');

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
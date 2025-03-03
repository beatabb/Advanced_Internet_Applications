var addButton = document.getElementById("addButton");
var myTable = document.getElementById("myTable");


addButton.setAttribute('onclick', 'addRow()');
saveButton.setAttribute('onclick', 'saveRow()');
removeButton.setAttribute('onclick', 'removeRow()');
editButton.setAttribute('onclick', 'editRow()');

function addRow(){

    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow   = tableRef.insertRow();
    var authorCell  = newRow.insertCell(0);
    var titleCell  = newRow.insertCell(1);
    var thirdCell  = newRow.insertCell(2);

    authorCell.append(document.createElement('input'));
    titleCell.append(document.createElement('input'));

    var saveButton = document.createElement('button');
    saveButton.innerHTML = "Save";
    saveButton.setAttribute('onclick', 'saveRow(this)');
    saveButton.setAttribute('class', 'saveButton');
    saveButton.setAttribute('type', 'button');

    thirdCell.appendChild(saveButton);

    var removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.setAttribute('onclick', 'removeRow(this)');
    removeButton.setAttribute('class', 'removeButton');
    removeButton.setAttribute('type', 'button');

    thirdCell.appendChild(removeButton);
    
}

function getValueFromInput(cell){
    return cell.childNodes[0].value;
}

function getValueFromInner(cell){
    return cell.childNodes[0].innerHTML;
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

function setValueInInput(cell, value){
    
    deleteValuesFromCell(cell);

    let temp = document.createElement('input');
    temp.value = value;
    cell.append(temp);

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

    let newAuthorValue = getValueFromInput(authorCell);
    let newTitleValue = getValueFromInput(titleCell);

    deleteValuesFromCell(authorCell);
    deleteValuesFromCell(titleCell);
    deleteValuesFromCell(thirdCell);

    setValue(authorCell, newAuthorValue, 'label');
    setValue(titleCell, newTitleValue, 'label');
    setValueButton(thirdCell, 'editButton', 'editRow(this)', 'Edit');
    setValueButton(thirdCell, 'removeButton', 'removeRow(this)', 'Remove');

}

function removeRow(button){

    let numb = button.parentNode.parentNode.rowIndex;

    let theTable = document.getElementById("myTable");
    theTable.deleteRow(numb);

}

function editRow(button){

    let numb = button.parentNode.parentNode.rowIndex;

    let theTable = document.getElementById("myTable");
    let theRow = theTable.rows[numb];
    let authorCell = theRow.cells[0];
    let titleCell = theRow.cells[1];
    let thirdCell = theRow.cells[2];

    let currentAuthorValue = getValueFromInner(authorCell);
    let currentTitleValue = getValueFromInner(titleCell);
    deleteValuesFromCell(thirdCell);

    setValueInInput(authorCell, currentAuthorValue);
    setValueInInput(titleCell, currentTitleValue);

    setValueButton(thirdCell, 'saveButton', 'saveRow(this)', 'Save');
    setValueButton(thirdCell, 'removeButton', 'removeRow(this)', 'Remove');

}
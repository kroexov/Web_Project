function GetStock(){
    var table = document.getElementById('table');
    var inpval = document.getElementById('name').value.toUpperCase();
    var inpprice = document.getElementById('price').value;
    var inpchange = document.getElementById('change').value;
    let found = false;
    for (i = 0; i<table.rows.length; i++){
        if (found)
            break;
        if (table.rows[i].cells[0].innerText == inpval){
            table.rows[i].cells[2].innerText = parseInt(table.rows[i].cells[2].innerText) + 1;
            found = true;
        }
    }
    if (!found){
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML = inpval;
        row.insertCell(1).innerHTML = "₽"+inpprice;
        row.insertCell(2).innerHTML = "1";
        row.insertCell(3).innerHTML = inpchange + "%";
    }
    localStorage.setItem('val', inpval);
    localStorage.setItem('price', inpprice);
    localStorage.setItem('change', inpchange);
    return false;
}

function GetSavedStock(){
    document.getElementById('name').value = localStorage.val;
    document.getElementById('price').value = localStorage.price;
    document.getElementById('change').value = localStorage.change;
}
window.addEventListener('load', function () {
    let table = document.getElementById('table');
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        if (key !== 'lastVal' && key !== 'lastPrice' && key !== 'lastChange'){

            let inpval = localStorage.getItem(key).split("|")[0];
            let count = localStorage.getItem(key).split("|")[2];
            let inpprice = localStorage.getItem(key).split("|")[1];
            let inpchange = localStorage.getItem(key).split("|")[3];

            let rowCount = table.rows.length;
            let row = table.insertRow(rowCount);
            row.insertCell(0).innerHTML = inpval;
            row.insertCell(1).innerHTML = "₽" + inpprice;
            row.insertCell(2).innerHTML = count;
            row.insertCell(3).innerHTML = inpchange + "%";
            localStorage.setItem('lastVal', inpval);
            localStorage.setItem('lastPrice', inpprice);
            localStorage.setItem('lastChange', inpchange);
        }
    }
});


function GetStock(){
    let table = document.getElementById('table');
    let inpval = document.getElementById('name').value.toUpperCase();
    let inpprice = document.getElementById('price').value;
    let inpchange = document.getElementById('change').value;
    let found = false;
    for (i = 0; i<table.rows.length; i++){
        if (found)
            break;
        if (table.rows[i].cells[0].innerText === inpval){
            table.rows[i].cells[2].innerText = parseInt(table.rows[i].cells[2].innerText) + 1;
            table.rows[i].cells[1].innerText = "₽" + inpprice;
            table.rows[i].cells[3].innerText = inpchange + "%";
            found = true;
        }
    }
    if (!found){
        let rowCount = table.rows.length;
        let row = table.insertRow(rowCount);
        if (!/[0-9]/.test(inpval)) {
            row.insertCell(0).innerHTML = inpval;
            row.insertCell(1).innerHTML = "₽" + inpprice;
            row.insertCell(2).innerHTML = "1";
            row.insertCell(3).innerHTML = inpchange + "%";
            localStorage.setItem('lastVal', inpval);
            localStorage.setItem('lastPrice', inpprice);
            localStorage.setItem('lastChange', inpchange);
        }
    }
    localStorage.setItem('row' + (table.rows.length - 1), inpval + '|' + inpprice + '|' + parseInt(table.rows[table.rows.length - 1].cells[2].innerText) +'|' + inpchange);

    return false;
}

function GetSavedStock(){
    if (typeof localStorage.lastVal !== 'undefined' && typeof localStorage.lastPrice !== 'undefined' && typeof localStorage.lastChange !== 'undefined')
    {
        document.getElementById('name').value = localStorage.lastVal;
        document.getElementById('price').value = localStorage.lastPrice;
        document.getElementById('change').value = localStorage.lastChange;
    }
}
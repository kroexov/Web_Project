var chosenSymbol = '$';
var moneyCurrent;
var moneySaving;

window.onload = function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.classList.toggle('active');
    chosenSymbol = button1.textContent;

    moneyCurrent = document.getElementById('moneyCurrent');
    moneySaving = document.getElementById('moneySaving');

    button1.addEventListener('click', () => {
        button1.classList.toggle('active');
        if (button2.classList.toggle('active'))
            button2.classList.toggle('active')
        if (button3.classList.toggle('active'))
            button3.classList.toggle('active')
        chosenSymbol = button1.textContent;
        UpdateAfterCurrencyChange();
    });
    button2.addEventListener('click', () => {
        button2.classList.toggle('active');
        if (button1.classList.toggle('active'))
            button1.classList.toggle('active')
        if (button3.classList.toggle('active'))
            button3.classList.toggle('active')
        chosenSymbol = button2.textContent;
        UpdateAfterCurrencyChange();
    });
    button3.addEventListener('click', () => {
        button3.classList.toggle('active');
        if (button2.classList.toggle('active'))
            button2.classList.toggle('active')
        if (button1.classList.toggle('active'))
            button1.classList.toggle('active')
        chosenSymbol = button3.textContent;
        UpdateAfterCurrencyChange();
    });
}

function SimpleRangeOnInput(input){
    input.nextElementSibling.value = input.value + chosenSymbol;
}

function UpdateAfterCurrencyChange(){
    moneyCurrent.nextElementSibling.value = moneyCurrent.value + chosenSymbol;
    moneySaving.nextElementSibling.value = moneySaving.value + chosenSymbol;
}

function DoubleRangeOnInput1(input){
    input.value=Math.min(input.value,input.parentNode.childNodes[5].value-1);
    var value=(100/(parseInt(input.max)-parseInt(input.min)))*parseInt(input.value)-(100/(parseInt(input.max)-parseInt(input.min)))*parseInt(input.min);
    var children = input.parentNode.childNodes[1].childNodes;
    children[1].style.width=value+'%';
    children[5].style.left=value+'%';
    children[7].style.left=value+'%';children[11].style.left=value+'%';
    children[11].childNodes[1].innerHTML=input.value;
}

function DoubleRangeOnInput2(input){
    input.value=Math.max(input.value,input.parentNode.childNodes[3].value-(-1));
    var value=(100/(parseInt(input.max)-parseInt(input.min)))*parseInt(input.value)-(100/(parseInt(input.max)-parseInt(input.min)))*parseInt(input.min);
    var children = input.parentNode.childNodes[1].childNodes;
    children[3].style.width=(100-value)+'%';
    children[5].style.right=(100-value)+'%';
    children[9].style.left=value+'%';children[13].style.left=value+'%';
    children[13].childNodes[1].innerHTML=input.value;
}



window.onload = function (){
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.classList.toggle('active');

    const moneyCurrent = document.getElementById('moneyCurrent');
    const moneySaving = document.getElementById('moneySaving');
    const moneyPercent = document.getElementById('moneyPercent');

    moneyCurrent.oninput=moneyCurrent.nextElementSibling.value = moneyCurrent.value + '$';
    moneySaving.oninput=moneySaving.nextElementSibling.value = moneySaving.value + '$';

    button1.addEventListener('click', () => {
        button1.classList.toggle('active');
        if (button2.classList.toggle('active'))
            button2.classList.toggle('active')
        if (button3.classList.toggle('active'))
            button3.classList.toggle('active')
        moneyCurrent.oninput=moneyCurrent.nextElementSibling.value = moneyCurrent.value + button1.textContent;
        moneySaving.oninput=moneySaving.nextElementSibling.value = moneySaving.value + button1.textContent;
    });
    button2.addEventListener('click', () => {
        button2.classList.toggle('active');
        if (button1.classList.toggle('active'))
            button1.classList.toggle('active')
        if (button3.classList.toggle('active'))
            button3.classList.toggle('active')
        moneyCurrent.oninput=moneyCurrent.nextElementSibling.value = moneyCurrent.value + button2.textContent;
        moneySaving.oninput=moneySaving.nextElementSibling.value = moneySaving.value + button2.textContent;
    });
    button3.addEventListener('click', () => {
        button3.classList.toggle('active');
        if (button2.classList.toggle('active'))
            button2.classList.toggle('active')
        if (button1.classList.toggle('active'))
            button1.classList.toggle('active')
        moneyCurrent.oninput=moneyCurrent.nextElementSibling.value = moneyCurrent.value + button3.textContent;
        moneySaving.oninput=moneySaving.nextElementSibling.value = moneySaving.value + button3.textContent;
    });
}


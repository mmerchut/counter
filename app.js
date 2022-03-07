const btnMinus = document.querySelector('.minus');
const btnPlus = document.querySelector('.plus');
const btnClear = document.querySelector('.clear');
const counterDiv = document.querySelector('.counter');
let counter = 0;

const clearCouter = () => {
    counter = 0;
    counterDiv.textContent = counter;
}

const counterPlus = () => {
    counter++;
    counterDiv.textContent = counter;
    console.log('dziala')
}

const counterMinus = () => {
    counter--;
    counterDiv.textContent = counter;
}

btnClear.addEventListener('click', clearCouter);
btnMinus.addEventListener('click', counterMinus);
btnPlus.addEventListener('click', counterPlus);
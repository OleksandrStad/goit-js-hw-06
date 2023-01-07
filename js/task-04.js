
let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');

decrementEl.addEventListener('click', function () {

    counterValue += 1,
        valueEl.textContent = counterValue
});

incrementEl.addEventListener('click', function () {

    counterValue -= 1,
        valueEl.textContent = counterValue
});
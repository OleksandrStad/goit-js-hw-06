
const inputEl = document.getElementById('validation-input');


inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    (event.currentTarget.value).length === Number(inputEl.dataset.length) ? (inputEl.classList.add('valid'), inputEl.classList.remove('invalid'))
        : inputEl.classList.add('invalid');


    // console.dir(event.currentTarget);
    // console.log((inputEl.dataset.length));
    // console.log((event.currentTarget.value).length)
}; 
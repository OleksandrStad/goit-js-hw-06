const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', (event) => {

    event.currentTarget.value === `` ? outputEl.textContent = 'Anonymous' : outputEl.textContent = event.currentTarget.value;




});


// inputEl.addEventListener('input', (event) => {

//     if (outputEl.textContent = event.currentTarget.value) {
//         event.currentTarget.value;
//     } else {
//         outputEl.textContent = 'Anonymous'
//     }

// });


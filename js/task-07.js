const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');


inputEl.addEventListener('change', onChangeFont);

function onChangeFont(event) {

    spanEl.style.fontSize = event.currentTarget.value + "px";

};


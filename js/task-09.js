function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

const color = getRandomHexColor();


buttonEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {

  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;

};



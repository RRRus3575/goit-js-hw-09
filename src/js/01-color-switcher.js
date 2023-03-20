'use strict';

const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let activeBtn = false;
let inetval = null;
addButtonStatus(stopEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startEl.addEventListener('click', () => {
  activeBtn = true;

  if (activeBtn) {
    addButtonStatus(startEl);
  }
  removeButtonStatus(stopEl);
  inetval = setInterval(changeColor, 1000);
});
stopEl.addEventListener('click', stopFunction);

function changeColor() {
  let color = getRandomHexColor();

  body.style.backgroundColor = `${color}`;
}

function stopFunction() {
  console.log('stop');

  if (!activeBtn) {
    return;
  }
  addButtonStatus(stopEl);
  removeButtonStatus(startEl);

  clearInterval(inetval);
  activeBtn = false;
}

function addButtonStatus(button) {
  button.setAttribute('disabled', 'disabled');
}
function removeButtonStatus(button) {
  button.removeAttribute('disabled');
}

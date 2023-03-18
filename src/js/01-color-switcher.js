'use strict';

const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let activeBtn = false;
let inetval = null;
stopEl.setAttribute('disabled', 'disabled');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startEl.addEventListener('click', () => {
  activeBtn = true;

  if (activeBtn) {
    startEl.setAttribute('disabled', 'disabled');
  }
  stopEl.removeAttribute('disabled');
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
  stopEl.setAttribute('disabled', 'disabled');
  startEl.removeAttribute('disabled');
  clearInterval(inetval);
  activeBtn = false;
}

'use strict';

const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startEl.addEventListener('click', () => {
  let timerId = setInterval(() => {
    console.log('start');
    let color = getRandomHexColor();
    return (body.style.backgroundColor = `${color}`);
  }, 1000);
  return timerId;
});
stopEl.addEventListener('click', stopFucntion);

function stopFucntion() {
  console.log('stop');
}

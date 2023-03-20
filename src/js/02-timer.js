'use strict';

import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

const startEl = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let valueDate = 0;
startEl.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    console.log(selectedDates);

    if (selectedDates < Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      startEl.removeAttribute('disabled');
      startEl.addEventListener('click', buttonClick);
    }
    function buttonClick() {
      timerValue(selectedDates);
    }
    startEl.EventListener('click', buttonClick);
  },
};

flatpickr(input, options);

function addValue(timerData) {
  daysEl.textContent = addLeadingZero(timerData.days);
  hoursEl.textContent = addLeadingZero(timerData.hours);
  minutesEl.textContent = addLeadingZero(timerData.minutes);
  secondsEl.textContent = addLeadingZero(timerData.seconds);
}
function timerValue() {
  let timer = setInterval(() => {
    let difference = new Date(input.value) - Date.now();
    if (difference >= 0) {
      let timerData = convertMs(difference);
      addValue(timerData);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

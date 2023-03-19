'use strict';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

console.log(3);
const form = document.querySelector('.form');

form.addEventListener('input', throttle(takeData, 500));
form.addEventListener('submit', dataProcessing);

let formData = {};

function takeData(event) {
  event.preventDefault();

  formData[event.target.name] = event.target.value;
}

function dataProcessing(event) {
  event.preventDefault();

  // const { delay, step, amount } = formData;
  let firstDelay = Number(formData.delay);
  let delay = Number(formData.step);
  let amount = Number(formData.amount);

  // if ((formData = {})) {
  //   return;
  // }

  for (let i = 1; i <= amount; i++) {
    setTimeout(createPromise(i, delay * i + firstDelay), firstDelay);
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(value => {
      Notify.success(value);
    })
    .catch(error => {
      Notify.failure(error);
    });
}

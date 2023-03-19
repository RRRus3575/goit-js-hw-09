'use strict';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

  let firstDelay = Number(formData.delay);
  let delay = Number(formData.step);
  let amount = Number(formData.amount);

  for (let i = 0; i < amount; i++) {
    setTimeout(createPromise(i + 1, delay * i + firstDelay), firstDelay);
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
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

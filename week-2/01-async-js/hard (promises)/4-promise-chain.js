/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, t * 1000);
  });
  return p;
}

function wait2(t) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, t * 1000);
  });
  return p;
}

function wait3(t) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, t * 1000);
  });
  return p;
}

function calculateTime(t1, t2, t3) {
  const currentTime = new Date().getSeconds();
  let time = null;
  wait1(t1)
    .then(() => {
      return wait2(t2);
    })
    .then(() => {
      return wait3(t3);
    })
    .then(() => {
      console.log(new Date().getSeconds - currentTime);
      time = new Date().getSeconds - currentTime;
    })
    .catch((err) => {
      console.error(err);
    });
  return time;
}

console.log(calculateTime(1, 2, 3));
module.exports = calculateTime;

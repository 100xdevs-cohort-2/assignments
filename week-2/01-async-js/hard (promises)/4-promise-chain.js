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
  const startTime = new Date().getTime(); // Get current timestamp in milliseconds

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const endTime = new Date().getTime();
      const totalTime = endTime - startTime;
      console.log('Total time (ms):', totalTime);
      return totalTime;
    })
    .catch((err) => {
      console.error(err);
    });
}

console.log(calculateTime(1, 2, 3));
module.exports = calculateTime;

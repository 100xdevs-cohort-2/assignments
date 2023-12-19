/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return wait1(t1)                      // wait1 returns a promise that resolves after t1 seconds
            .then(res1 => wait2(t2))    // wait2 returns a promise that resolves after t2 seconds
            .then(res2 => wait3(t3))    // wait3 returns a promise that resolves after t3 seconds
            .then(res3 => Date.now() - start);  // return the time it took to complete the entire operation
}

module.exports = calculateTime;

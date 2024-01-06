/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

function wait2(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

function wait3(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  let start = Date.now();
  return new Promise((resolve, reject) => {
    Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
      resolve(Date.now() - start);
    });
  });
}

module.exports = calculateTime;

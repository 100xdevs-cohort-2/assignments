/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const initDate = new Date().getTime();
  const val1 = wait1(t1);
  const val2 = wait2(t2);
  const val3 = wait3(t3);
  return Promise.all([val1, val2, val3]).then(() => {
    const finalDate = new Date().getTime();
    return finalDate - initDate;
  });
}

module.exports = calculateTime;

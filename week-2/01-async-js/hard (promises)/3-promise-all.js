/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return p;
}

function wait2(t) {
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return p;
}

function wait3(t) {
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return p;
}

function calculateTime(t1, t2, t3) {
  let date1 = new Date().getTime();
  let value1 = wait1(t1);
  let value2 = wait2(t2);

  let value3 = wait3(t3);
  return Promise.all([value1, value2, value3]).then(() => {
    let date2 = new Date().getTime();
    return date2 - date1;
  });
}

module.exports = calculateTime;

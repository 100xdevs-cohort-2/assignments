/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("one"), t * 1000);
  });
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("two"), t * 1000);
  });
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("three"), t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  wait1(t1)
    .then((log) => {
      console.log(log);
      return wait2(t2);
    })
    .then((log) => {
      console.log(log);
      return wait3(t3);
    })
    .then((log) => {
      console.log(log);
      const end = Date.now() - start;
      console.log(`Time taken: ${end / 1000}s`);
    });
  // In Promise chaining the next method should be returned in then().
}
calculateTime(1, 2, 3);

module.exports = calculateTime;

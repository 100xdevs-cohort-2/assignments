/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve) => {
    resolve(
      setTimeout(() => {
        console.log("wait1");
      }, t * 1000)
    );
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    resolve(
      setTimeout(() => {
        console.log("wait2");
      }, t * 1000)
    );
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    resolve(
      setTimeout(() => {
        console.log("wait3");
      }, t * 1000)
    );
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return wait1
    .then(() => wait2())
    .then(() => wait3())
    .then(() => {
      const end = Date.now();
      const total = start - end;
      console.log(`Total Time from Promise Chain is: ${total}`);
      return total;
    })
    .then((res) => console.log(res));
}

module.exports = calculateTime;

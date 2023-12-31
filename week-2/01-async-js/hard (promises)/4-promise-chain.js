/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`waited ${t1}s`), t1 * 1000)
  );
}

function wait2(t2) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`waited ${t2}s`), t2 * 1000)
  );
}

function wait3(t3) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`waited ${t3}s`), t3 * 1000)
  );
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  async function callAllSequentially() {
    await wait1(t1);
    await wait2(t2);
    await wait3(t3);
  }
  callAllSequentially()
    .then((result) => {
      endTime = Date.now();
      const totaltime = endTime - startTime;
      console.log("The total time taken is " + totaltime * 1000 + "ms");
    })
    .catch((err) => {
      console.log(err);
    });
}

calculateTime(2, 1, 4);
module.exports = calculateTime;

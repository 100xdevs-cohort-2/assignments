/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitNSecond(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(), n * 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("resolved after 2 second"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("resolved after 3 second"), 3000);
  });
}

async function calculateTime(a, b, c) {
  const startTime = new Date();
  return waitNSecond(a).then((res) => {
    waitNSecond(b).then((res) => {
      waitNSecond(c).then((res) => {
        return Date.now() - startTime;
      });
    });
  });
}

async function calculateTimeAsync(a, b, c) {
  const startTime = new Date();
  const res1 = await waitNSecond(a);
  const res2 = await waitNSecond(b);
  const res3 = await waitNSecond(c);
  return Date.now() - startTime;
}

module.exports = calculateTimeAsync;

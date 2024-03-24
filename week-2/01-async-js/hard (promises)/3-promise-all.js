/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`1. resolved in ${t / 1000} seconds`);
    }, t);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`2. resolved in ${t / 1000} seconds`);
    }, t);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`3. resolved in ${t / 1000} seconds`);
    }, t);
  });
}

async function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();
  const p = await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  console.log(p);
}
const ret = calculateTime(1000, 2000, 3000);
console.log("print last", ret);

module.exports = calculateTime;

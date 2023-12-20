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
  start = new Date();
  start = new Date();
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

function promiseAll(t1, t2, t3) {
  p1 = wait1(t1);
  p2 = wait1(t2);
  p3 = wait1(t3);
  return Promise.all([p1, p2, p3]);
}

async function calculateTime(t1, t2, t3) {
  start = new Date();
  await promiseAll(t1, t2, t3);
  end = new Date();
  run_time = end.getTime() - start.getTime();
  // console.log("runtime:", run_time);
  return run_time;
}
// console.log(calculateTime(1, 2, 3));
module.exports = calculateTime;

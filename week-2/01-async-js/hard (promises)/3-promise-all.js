/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) => {
    resolve(
      setTimeout(() => {
        console.log(`wait1 resolved after ${t}`);
      }, t * 1000)
    );
  }).then((res) => console.log(res));
}

function wait2(t) {
  return new Promise((resolve) => {
    resolve(
      setTimeout(() => {
        console.log(`wait2 resolved after ${t}`);
      }, t * 1000)
    );
  }).then((res) => console.log(res));
}

function wait3(t) {
  return new Promise((resolve) => {
    resolve(
      setTimeout(() => {
        console.log(`wait3 resolved after ${t}`);
      }, t * 1000)
    );
  }).then((res) => console.log(res));
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  const promise = [wait1(t1), wait2(t2), wait3(t3)];
  return Promise.all(promise)
    .then(() => {
      const end = Date.now();
      const totalTime = start - end;
      console.log(`Total Time taken: ${totalTime} ms`);
      return totalTime;
    })
    .then((total) => console.log(`Total Time taken: ${total} ms`));
}

module.exports = calculateTime;

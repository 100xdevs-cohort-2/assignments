/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolved after ${t1} seconds`);
    }, t1 * 1000);
  });
}

function wait2(t2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolved after ${t2} seconds`);
    }, t2 * 1000);
  });
}

function wait3(t3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolved after ${t3} seconds`);
    }, t3 * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    .then(() => {
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      return totalTime;
    })
    .catch((err) => {
      console.log(err);
    });
}
calculateTime(2, 3, 1)
  .then((totalTime) => {
    console.log(`it took ${totalTime} millisecs to excecute`);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = calculateTime;

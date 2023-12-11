/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  let prom = new Promise((resolve) => {
    setInterval(resolve, t * 1000);
  });
  return prom;
}

function wait2(t) {
  let prom = new Promise((resolve) => {
    setInterval(resolve, t * 1000);
  });
  return prom;
}

function wait3(t) {
  let prom = new Promise((resolve) => {
    setInterval(resolve, t * 1000);
  });
  return prom;
}

function calculateTime(t1, t2, t3) {
  let start = Date.now();

  //   let p1 = wait1(t1);
  //   let p2 = wait2(t2);
  //   let p3 = wait3(t3);

  //   return p1.then(() => {
  //     return p2.then(() => {
  //       return p3.then(() => {
  //         return new Promise((resolve) => {
  //           let timeTaken = Date.now() - start;
  //           resolve(timeTaken);
  //         });
  //       });
  //     });
  //   });

  return wait1(t1).then(() => {
    return wait1(t2).then(() => {
      return wait1(t3).then(() => {
        return new Promise((resolve) => {
          let timeTaken = Date.now() - start;
          resolve(timeTaken);
        });
      });
    });
  });
}

module.exports = calculateTime;

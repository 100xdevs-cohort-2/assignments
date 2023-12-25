/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1");
    }, t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2");
    }, t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3");
    }, t);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const end = Date.now();
      const elapsedTime = end - start;
      console.log("total time req", elapsedTime);
    });
}
calculateTime(2000, 3000, 5000);

// function calculateTime(t1, t2, t3) {
//     const start = Date.now();

//     return wait1(t1).then((res) => {
//       console.log(res);
//       wait2(t2).then((res) => {
//           console.log(res)
//         wait3(t3).then((res) => {
//           console.log(res);
//           const end = Date.now();
//           const elapsedTime = end - start;
//           console.log("total time req", elapsedTime);
//         });
//       });
//     });
//   }

module.exports = calculateTime;

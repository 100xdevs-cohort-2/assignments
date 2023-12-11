/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third Promise");
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();
  return wait1(t1)
    .then(() => {
      console.log("first promise done");
      return wait2(t2);
    })
    .then(() => {
      console.log("second promise done");
      return wait3(t3);
    })
    .then(() => {
      console.log("third promise done");
      const endTime = new Date().getTime();
      return endTime - startTime;
    });
}

// function calculateTime(t1, t2, t3) {
//   const startTime = new Date().getTime();

//   return wait1(t1)
//     .then(() => {
//       console.log("First promise done");
//       return wait2(t2);
//     })
//     .then(() => {
//       console.log("Second promise done");
//       return wait3(t3);
//     })
//     .then(() => {
//       const endTime = new Date().getTime();
//       console.log("Third promise done");
//       console.log(`took ${endTime - startTime} milliseconds`);
//       return endTime - startTime;
//     });
// }

module.exports = calculateTime;

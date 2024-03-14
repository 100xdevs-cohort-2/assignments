/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited for ${t} seconds`);
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited for ${t} seconds`);
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited for ${t} seconds`);
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  return wait1(t1)
    .then((result1) => {
      console.log(result1);
      return wait2(t2);
    })
    .then((result2) => {
      console.log(result2);
      return wait3(t3);
    })
    .then((result3) => {
      console.log(result3);
      const endTime = Date.now();
      return endTime - startTime;
    });
}

calculateTime(2, 3, 1)
  .then((totalTime) => {
    console.log(`Total time taken: ${totalTime} milliseconds`);
  })
  .catch((error) => {
    console.error(error);
  });


module.exports = calculateTime;

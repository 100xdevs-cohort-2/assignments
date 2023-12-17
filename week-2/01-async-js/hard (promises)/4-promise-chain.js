/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promise 1 resolved after ${t} seconds`);
      }, t * 1000);
    });
  }
  
  function wait2(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promise 2 resolved after ${t} seconds`);
      }, t * 1000);
    });
  }
  
  function wait3(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promise 3 resolved after ${t} seconds`);
      }, t * 1000);
    });
  }
  
  function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
  
    return wait1(t1)
      .then((result) => {
        console.log(result);
        return wait2(t2);
      })
      .then((result) => {
        console.log(result);
        return wait3(t3);
      })
      .then((result) => {
        console.log(result);
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log("Sequential execution completed in", duration, "milliseconds");
        return duration;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  // Example usage
  calculateTime(1, 2, 3)
    .then((totalTime) => {
      console.log("Total time:", totalTime, "milliseconds");
    })
    .catch((error) => {
      console.error("Error in calculation:", error);
    });
  
  module.exports = calculateTime;
  
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

<<<<<<< HEAD
function waitOneSecond() {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve("Done waitOneSecond");
      }, 1000);
    });
  }
  
  function waitTwoSecond() {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve("Done waitTwoSecond ");
      }, 2000);
    });
  }
  
  function waitThreeSecond() {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve("Done waitThreeSecond");
      }, 3000);
    });
  }
  
  function calculateTime() {
    const startTime = Date.now();
    waitOneSecond()
      .then((result) => {
        console.log(result);
        return waitTwoSecond();
      })
      .then((result) => {
        console.log(result);
        return waitThreeSecond();
      })
      .then((result) => {
        console.log(result);
        const endTime = Date.now();
        const duration = (endTime - startTime)/1000;
        console.log("Sequential operation completed in", duration, "seconds");
      });
  }

  calculateTime();
  
=======
function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;
>>>>>>> origin/master

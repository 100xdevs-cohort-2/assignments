/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


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
  

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Done waiting for ${t} milliseconds`);
    }, t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Done waiting for ${t} milliseconds`);
    }, t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Done waiting for ${t} milliseconds`);
    }, t);
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
      console.log("Sequential operation completed in", duration, "milliseconds");
      return duration;
    });
}
module.exports = calculateTime;


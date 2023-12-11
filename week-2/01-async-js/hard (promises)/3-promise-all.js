/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, t * 1000);
  });
}

function waitTwoSecond(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, t * 1000);
  });
}

function waitThreeSecond(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third Promise");
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();

  return Promise.all([waitOneSecond(t1), waitTwoSecond(t2), waitThreeSecond(t3)]).then(
    (result) => {
      const endTime = new Date().getTime();
      console.log(result);
      console.log(
        `took ${endTime - startTime} milliseconds to resolve all promises`
      );
      return endTime - startTime;
    }
  );
}

module.exports = { calculateTime };

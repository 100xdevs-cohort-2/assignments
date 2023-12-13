/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("one"), 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("two"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("three"), 3000);
  });
}

function calculateTime() {
  const start = Date.now();
  waitOneSecond()
    .then((log) => {
      console.log(log);
      return waitTwoSecond();
    })
    .then((log) => {
      console.log(log);
      return waitThreeSecond();
    })
    .then((log) => {
      console.log(log);
      const end = Date.now() - start;
      console.log(`Time taken: ${end / 1000}s`);
    });
}

calculateTime();

/*
In Promise chaining the next method should be returned in then().
*/

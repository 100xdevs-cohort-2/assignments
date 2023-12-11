/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

let waitOneSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});

let waitTwoSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});

let waitThreeSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});

function calculateTime() {
  waitOneSecond.then(() => {
    console.log("waiteed 1 seconds");
    waitTwoSecond.then(() => {
      console.log("waiteed 2 seconds");
      waitThreeSecond.then(() => {
        console.log("waiteed 3 seconds");
      });
    });
  });
}
calculateTime();

/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, 2000);
  });
}

function calculateTime() {
  const startTime = new Date().getTime();
  waitOneSecond().then(() => {
    console.log("frist promise done");
    waitTwoSecond().then(() => {
      console.log("second promise done");
      waitThreeSecond().then(() => {
        const endTime = new Date().getTime();
        console.log("third promise done");
        console.log(`took ${endTime - startTime} milliseconds`);
      });
    });
  });
}
calculateTime()

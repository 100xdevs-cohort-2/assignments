/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
 return new Promise(function (resolve) {
        setTimeout(function () {
          resolve("hi there 1");
        }, 1000);
      });
}

function waitTwoSecond() {
 return new Promise(function (resolve) {
        setTimeout(function () {
          resolve("hi there 2");
        }, 2000);
      });
}

function waitThreeSecond() {
 return new Promise(function (resolve) {
        setTimeout(function () {
          resolve("hi there 3");
        }, 3000);
      });
}

function calculateTime(s) {
    const e = new Date();
    const timeTaken= e - s;
    console.log("Time taken:", timeTaken, "milliseconds");
}


async function callPromises() {
    const s = new Date();
    const result1 = await waitOneSecond();
    console.log(result1);
  
    const result2 = await waitTwoSecond();
    console.log(result2);
  
    const result3 = await waitThreeSecond();
    console.log(result3);
  
    calculateTime(s);
  }
  
  callPromises();


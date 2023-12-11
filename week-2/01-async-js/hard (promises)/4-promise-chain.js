/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('1 second passed');
      }, 1000);
   });
}

function waitTwoSecond() {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('2 second passed');
      }, 2000);
   });
}

function waitThreeSecond() {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('3 second passed');
      }, 3000);
   });
}

async function calculateTime() {
   const start = new Date().getSeconds();

   await waitOneSecond();
   await waitTwoSecond();
   await waitThreeSecond();

   const stop = new Date().getSeconds();
   console.log(stop - start + 'sec');
}

calculateTime();

// Output from 3-promise-all.js: 3seconds
// All the three counters are executed parallely

// Output from 4-promise-chain.js: 6seconds
// Each counter is executed separately

/*
<<<<<<< HEAD
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {}

function wait2(t) {}

function wait3(t) {}

function calculateTime(t1, t2, t3) {}

module.exports = calculateTime;
=======
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('1 second passed');
      }, t * 1000);
   });
}

function wait2(t) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('2 second passed');
      }, t * 1000);
   });
}

function wait3(t) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('3 second passed');
      }, t * 1000);
   });
}

async function calculateTime(t1, t2, t3) {
   let start = new Date().getSeconds();

   await wait1(t1);
   await wait2(t2);
   await wait3(t3);

   let stop = new Date().getSeconds();

   if (start > stop) {
      start = 60 - start;
      let data = start + stop;
      return data * 1000;
   }

   let diff = stop - start;
   return diff * 1000;
}

module.exports = calculateTime;

// Output from 3-promise-all.js: 3seconds
// All the three counters are executed parallely

// Output from 4-promise-chain.js: 6seconds
// Each counter is executed separately
>>>>>>> 66c5d6ca6fa7a0d7e22eab9f82889f7004e24b33

/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('1 sec passed');
      }, 1000);
   });
}

function waitTwoSecond() {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('2 sec passed');
      }, 2000);
   });
}

function waitThreeSecond() {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('3 sec passed');
      }, 3000);
   });
}

function calculateTime() {
   return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
}

const start = new Date().getSeconds();
calculateTime().then(() => {
   const stop = new Date().getSeconds();
   console.log(stop - start + 'sec');
});

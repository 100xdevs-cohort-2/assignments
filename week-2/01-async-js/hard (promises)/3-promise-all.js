/*
<<<<<<< HEAD
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {}

function wait2(t) {}

function wait3(t) {}

function calculateTime(t1, t2, t3) {}
=======
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait1(t) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('1 sec passed');
      }, t * 1000);
   });
}

function wait2(t) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('2 sec passed');
      }, t * 1000);
   });
}

function wait3(t) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res('3 sec passed');
      }, t * 1000);
   });
}

async function calculateTime(t1, t2, t3) {
   let start = new Date().getSeconds();
   return (
      (await Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
         let stop = new Date().getSeconds();
         if (start > stop) {
            start = 60 - start;
            return start + stop;
         }
         return stop - start;
      })) * 1000
   );
}
>>>>>>> 66c5d6ca6fa7a0d7e22eab9f82889f7004e24b33

module.exports = calculateTime;

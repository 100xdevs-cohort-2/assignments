/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
<<<<<<< HEAD
 * the function should return a promise just like before
 */

function sleep(milliseconds) {}
=======
 */

function sleep(seconds) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res();
      }, seconds);
   });
}
>>>>>>> 66c5d6ca6fa7a0d7e22eab9f82889f7004e24b33

module.exports = sleep;

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  //   let sum = 0;
  //   for (let i; i < 9999; i++) {
  //     sum++;
  //   }
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, milliseconds);
  });
}

module.exports = sleep;

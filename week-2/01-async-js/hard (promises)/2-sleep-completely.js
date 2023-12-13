/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(seconds) {
  return new Promise((resolve, reject) => {
    let start = Date.now();
    while (Date.now() < start + seconds) {
      // do nothing
    }
    resolve();
  });
}

module.exports = sleep;

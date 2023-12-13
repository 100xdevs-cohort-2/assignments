/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let startTime = Date.now();
  let elapsedTime = 0;
  return new Promise((resolve, reject) => {
    function busyWait() {
      while (elapsedTime < milliseconds) {
        elapsedTime = Date.now() - startTime;
      }
      resolve();
    }
    setTimeout(busyWait, 0);
  });
}

module.exports = sleep;

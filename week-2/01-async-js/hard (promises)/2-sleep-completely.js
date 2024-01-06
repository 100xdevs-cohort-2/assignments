/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    const start = Date.now();

    function busyWait() {
      while (Date.now() - start > milliseconds) {
        console.log("busy waiting");
      }
      resolve();
    }
    setTimeout(busyWait, 0);
  }).then(res => console.log(res))
}

module.exports = sleep;

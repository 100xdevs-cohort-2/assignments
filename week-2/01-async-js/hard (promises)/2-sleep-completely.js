/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let promise = new Promise((resolve) => {
        const startTime = Date.now(); //return milliseconds elapsed
    
        setTimeout(() => {
          while (Date.now() - startTime < milliseconds) {
            console.log(Date.now() - startTime);
          }
          resolve();
        }, 0);
      });
      return promise;
}

module.exports = sleep;

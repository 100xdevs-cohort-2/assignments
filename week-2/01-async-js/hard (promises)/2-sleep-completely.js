/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const p = new Promise((resolve, reject) => {
    //logic to implement hard wait
  });
  return p;
}

// console.log("Hello");
// sleep(5000);
// console.log("World");
module.exports = sleep;

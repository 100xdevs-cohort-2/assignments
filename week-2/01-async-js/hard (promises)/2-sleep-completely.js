/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Slept for ${milliseconds} milliseconds`);
      resolve();
    }, milliseconds);
  });
}

sleep(3000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
module.exports = sleep;

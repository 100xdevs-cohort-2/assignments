/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const startTime = Date.now();

  while (Date.now() - startTime < milliseconds) {
    // Busy-waiting loop
  }

  return Promise.resolve(`Slept for ${milliseconds} milliseconds`);
}

sleep(3000)
  .then((message) => {
    console.log(message); // This will be printed after 3 seconds
  })
  .catch((error) => {
    console.error("Error:", error);
  });
module.exports = sleep;

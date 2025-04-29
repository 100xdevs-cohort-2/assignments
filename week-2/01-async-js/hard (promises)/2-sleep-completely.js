/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

console.log("before halting");
function sleep(milliseconds) {
  let startTime = Date.now();
  while (Date.now() - startTime < milliseconds) {}
  return new Promise((resolve, reject) => {
    resolve();
  });
}

async function relieved() {
  await sleep(10000);
  console.log("äfter halting");
}

relieved()


module.exports = sleep;

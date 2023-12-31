/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let current = Date.now();
  //console.log(current);
  while (Date.now() - current < milliseconds) {}

  return new Promise((resolve, reject) => {
    resolve();
  });
}

sleep(3000)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = sleep;

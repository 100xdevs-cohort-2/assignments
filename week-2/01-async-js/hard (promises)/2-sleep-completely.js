/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hehe`);
    }, n * 1000);
  });
}

wait(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // Will be called if there's an error
  });

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let a = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, n * 1000);
  });
  return a;
}

module.exports = wait;

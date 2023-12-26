/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    resolve(
      setTimeout(() => {
        resolve(PromisifiedFunction);
      }, n * 1000)
    );
  });
}

function PromisifiedFunction(n) {
  let startTime = Date.now();
  wait(n);
  let endTime = Date.now();
  let totalTime = startTime - endTime;
  return totalTime * 1000;
}

module.exports = wait;

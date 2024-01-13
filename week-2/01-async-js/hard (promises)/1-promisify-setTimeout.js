/**
 * @summary Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
 * @param {number} n - Provide the time in seconds to resolve the Promise
 */
function wait(n) {
  return new Promise((resolve) => setTimeout(resolve, n * 1000));
}

module.exports = wait;

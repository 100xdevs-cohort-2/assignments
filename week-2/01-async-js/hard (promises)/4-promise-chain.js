/**
 * @summary Creates a promise which resolves in `t` seconds
 * @param {number} t - Provide the time in seconds to execute the promise
 */
function wait1(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

/**
 * @summary Creates a promise which resolves in `t` seconds
 * @param {number} t - Provide the time in seconds to execute the promise
 */
function wait2(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

/**
 * @summary Creates a promise which resolves in `t` seconds
 * @param {number} t - Provide the time in seconds to execute the promise
 */
function wait3(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

/**
 * @summary Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 * @param {number} t1 - Provide the time in seconds to execute the promise
 * @param {number} t2 - Provide the time in seconds to execute the promise
 * @param {number} t3 - Provide the time in seconds to execute the promise
 * @returns
 */
async function calculateTime(t1, t2, t3) {
  const startTime = +new Date();

  return wait1(t1).then(() =>
    wait2(t2).then(() =>
      wait3(t3).then(() => {
        const endTime = +new Date();
        return endTime - startTime;
      })
    )
  );
}

module.exports = calculateTime;

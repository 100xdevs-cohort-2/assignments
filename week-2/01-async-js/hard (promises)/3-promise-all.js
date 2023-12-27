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
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all.
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 * @param {number} t1 - Provide the time in seconds to execute the promise
 * @param {number} t2 - Provide the time in seconds to execute the promise
 * @param {number} t3 - Provide the time in seconds to execute the promise
 */
async function calculateTime(t1, t2, t3) {
  const start = +new Date();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    const end = +new Date();
    return end - start;
  });
}

module.exports = calculateTime;

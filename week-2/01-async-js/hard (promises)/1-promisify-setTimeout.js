/**
 * Waits for a specified number of seconds before resolving.
 *
 * @param {number} n - The number of seconds to wait.
 * @return {Promise} A promise that resolves after the specified time.
 */
function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
}

// const start = new Date().getTime();
// wait(1).then(() => {
//     const end = new Date().getTime();
//     console.log("Run time: " + (end - start));
// });

module.exports = wait;

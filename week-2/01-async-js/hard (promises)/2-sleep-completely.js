/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

        return new Promise((resolve) => {
            const startTime = Date.now();
            while (Date.now() - startTime < milliseconds) {
                // Busy wait: This loop delays the execution for the specified milliseconds
                // Please note that this approach is not recommended and blocks the thread
                // It's used here just to demonstrate the concept of a busy wait in a Promise
            }
            resolve(); // Resolve the Promise after the delay
        });
    }

module.exports = sleep;

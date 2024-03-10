/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let time = new Date().getTime();
    while (new Date().getTime() - time < milliseconds) { }
    return new Promise((resolve) => { resolve() });
}

module.exports = sleep;

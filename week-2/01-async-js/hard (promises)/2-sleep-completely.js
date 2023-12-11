/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep (milliseconds) {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, milliseconds);
    });

    let start = new Date();
    let time = 0;
    while(time <= milliseconds) {
        let curr = new Date();
        time = curr - start;
    }
    console.log("Slept for", time/1000, "seconds");

    return p;
}

module.exports = sleep;
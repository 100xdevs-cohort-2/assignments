/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const d1 = Date.now() + milliseconds
    while(d1>Date.now()){

    }
    return
}
sleep(3000)
module.exports = sleep;

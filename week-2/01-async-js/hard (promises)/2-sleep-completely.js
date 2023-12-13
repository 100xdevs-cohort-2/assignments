/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
let a = 0;
function sleep(milliseconds) {
    return p = new Promise(function (resolve) {
        setTimeout(resolve, milliseconds)
    })
}

sleep(100000).then(console.log("Wait is Over."))

module.exports = sleep;

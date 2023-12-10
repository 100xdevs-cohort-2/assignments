/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep (seconds) {
    const ans = new Promise(function(resolve){
        setTimeout(resolve, seconds);
    })
    return ans;
}

module.exports = sleep;
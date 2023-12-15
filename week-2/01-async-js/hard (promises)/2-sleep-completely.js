/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function example(){
    console.log("start");
    await sleep(5000);
    console.log("end");
}

module.exports = sleep


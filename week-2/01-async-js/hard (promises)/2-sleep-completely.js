/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
}

module.exports = sleep;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const delayExecute = async () =>{
    console.log("Delayed");

    await sleep(5000);

    console.log("Execute");
}


delayExecute();
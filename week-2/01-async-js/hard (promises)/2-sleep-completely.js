/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const delayExecute = async () =>{
    console.log("Delayed");

    await sleep(5000);

    console.log("Execute");
}


delayExecute();
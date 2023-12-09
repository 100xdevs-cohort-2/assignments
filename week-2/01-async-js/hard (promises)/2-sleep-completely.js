/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, seconds);
    })
}

async function sleepCompletely(noOfSeconds){
    await sleep(noOfSeconds * 1000);
    console.log(`${noOfSeconds} are passed after sleep function called`);
}

sleepCompletely(4)

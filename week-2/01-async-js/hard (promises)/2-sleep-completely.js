/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


async function onDone(){
    let a = await sleep(3000);
    console.log("I guess this is async await.");
}

function sleep(milliseconds) {
    return new Promise(function(){
        setTimeout(function(){console.log("hi")}, milliseconds);
    })
}

async

module.exports = sleep;

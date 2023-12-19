/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function asyncFunction(milliseconds){
    let p = new Promise((resolve)=>{
        setTimeout(resolve,milliseconds);
    })
    return p;
}

async function sleep(milliseconds) {
    return await asyncFunction(milliseconds);
}
module.exports = sleep;
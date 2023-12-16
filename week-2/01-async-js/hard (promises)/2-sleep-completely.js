/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 * // async
 * 
 */

function sleep(milliseconds) {
return new Promise((resolve)=>{
    const startime = Date.now();
    while(true){
        const eT= Date.now() - startime;
        if(eT >= milliseconds){
            break;
        }
    }
    resolve();
})

sleep().then();



}

module.exports = sleep;

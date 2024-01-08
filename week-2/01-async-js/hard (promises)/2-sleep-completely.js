/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const P = new Promise((resolve,reject)=>{
        //Date.now() gives us current timestamp in milliseconds at the moment this line of code is executed.
        const startOfTimestamp = Date.now()
        
        while (Date.now()-startOfTimestamp<milliseconds){
            //now this loop continues to run until the difference is milliseconds
        }
        resolve();
    })
    return P
}

module.exports = sleep;

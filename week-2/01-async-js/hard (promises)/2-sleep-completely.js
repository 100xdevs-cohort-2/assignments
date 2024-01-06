/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const d = new Promise((resolve, reject)=> {
        var st = Date.now();

        while(Date.now()-st < milliseconds){
            //Js thread is just busy
            //Loop will exit after the specified milisecond pass
        }

        resolve();
    })
    return d;
}

module.exports = sleep;

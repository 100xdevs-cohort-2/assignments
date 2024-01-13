/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let p = new Promise(function(resolve){
        setTimeout(busyWait,milliseconds);
        function busyWait(){
            let i = 0;
            while(i<milliseconds){
                i++;
            }
            resolve();
        }
    })
    return p;
}

module.exports = sleep;

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    console.log("Blocking the thread for " + seconds + " seconds")
    let start = new Date().getTime();
    while(true) {
        let date = new Date().getTime();
        if((date - start) === (seconds*1000)) break;
    }
}

sleep(5);
console.log("Hello World!")
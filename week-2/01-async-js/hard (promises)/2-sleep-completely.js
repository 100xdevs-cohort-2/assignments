/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {

    const start = new Date().getTime();

    // Busy wait 
    while (new Date().getTime() - start < seconds * 1000) {
        // Do nothing and keep waiting
    }




}
console.log("Before sleep");
sleep(3);
console.log("After sleep");
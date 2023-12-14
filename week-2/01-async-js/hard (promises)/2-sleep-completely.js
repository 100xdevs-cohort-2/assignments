/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let upto = new Date().getTime() + seconds * 1000;
    while(new Date().getTime() <= upto) {}
    console.log(55);
}
sleep(5);
console.log(155);
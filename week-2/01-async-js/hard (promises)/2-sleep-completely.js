/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

    // Date.now() returns the total milliseconds since 1 jan 1970
    // getTime() returns the current time

    let ms = seconds * 1000;

    let currentTime = new Date().getTime();
    while(new Date().getTime() - currentTime != ms);

    console.log(`The Halt for ${seconds} seconds is done!`);
}

function main(){

    console.log("start");
    sleep(10);
    console.log("end");
}

main();

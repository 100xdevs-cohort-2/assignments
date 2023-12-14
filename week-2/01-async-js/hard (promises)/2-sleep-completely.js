/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {


    // Date.now() returns the total milliseconds since 1 jan 1970
    // getTime() returns the current time

    return new Promise((resolve, reject) => {

        // reject if milliseconds is less than 0 or milliseconds is not a number
        if(isNaN(milliseconds) || milliseconds < 0)
        {
            reject("Invalid value of n!");
        }


        let currentTime = Date.now();
        while(Date.now() - currentTime != milliseconds);
        // console.log(`The Halt for ${milliseconds / 1000} seconds is done!`);
        resolve()
    })


}

function main(){

    console.log("start");
    sleep(10_000);
    console.log("end");
}

main();
module.exports = sleep;

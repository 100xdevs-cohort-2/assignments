/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    return new Promise((resolve) => {
        const startTime = Date.now();

        // Busy wait

        while(Date.now() - startTime < milliseconds){
            
        }

        resolve();
    })
}

module.exports = sleep;



// Timer in seconds since midnight January 1, 1970

// console.log(`Start thread freez time(s) :`, Math.floor(Date.now()/1000));

// sleep(5000).then(()=>{
//     console.log("Done");
// });

// console.log(`End Thread freeze time(s): `, Math.floor(Date.now()/1000));


// Freezes the JS thread synchronously , Also called blocking I/O operation.

// Instantiating the Date() class might now help as this is a timer and it goes into an infinite loop

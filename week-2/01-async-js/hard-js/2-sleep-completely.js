/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

 //setTimeout approach is bad because it wouldn't be able to halt the js thread, achieved by while loop
function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        while (Date.now() - start < milliseconds) {
            // Consume CPU cycles
        }
        resolve(milliseconds);
    });
}

console.log("Before sleep");

sleep(3000)
    .then((result) => {
        console.log(`Sleep completed: ${result}`);
    })
    .catch((error) => {
        console.error(error);
    });

console.log("After sleep");


module.exports = sleep;

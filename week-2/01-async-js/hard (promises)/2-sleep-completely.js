/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log("done now");
        resolve()
      },milliseconds)

    }
    )
}

for(let i,c = 0; i<100000; i++){
    c+=10
}
console.log("ok");

module.exports = sleep;

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    for(let i = 0; i < milliseconds; i++){

    }
    return new Promise((resolve)=>{
        resolve(`returned promise`)
    })
}

sleep(10000000000000).then(data => {
    console.log(data);
})

module.exports = sleep;
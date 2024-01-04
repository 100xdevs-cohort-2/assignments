/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let a=0
    console.log("go to sleep")
    for(let i=0;i<10000000000;i++){
        a+=i
    }
    console.log('awake')
    return new Promise(function(resolve){
       setTimeout( resolve(),milliseconds)
    })
}
sleep(20000)

module.exports = sleep;

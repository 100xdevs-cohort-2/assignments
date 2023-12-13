/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return p = new Promise (function(resolve){
        setTimeout(function(){
            resolve("Waited for "+ seconds+ " to resolve");
        }, seconds*1000);
    })
}

const ans = sleep(6);

console.log("checkpoint 1");

ans.then(function(value){
    console.log(value)
});

console.log("checkpoiint2");
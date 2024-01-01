/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const wait = require("./1-promisify-setTimeout");

function wait1(t) {
    let p = new Promise(function(resolve , reject){
        setTimeout(function(){
                resolve();
        } , t *1000 );
    })
    return p;
}

function wait2(t) {
    let p = new Promise(function(resolve , reject){
        setTimeout(function(){
                resolve();
        } , t *1000);
    })
    return p;
}

function wait3(t) {
    let p = new Promise(function(resolve , reject){
        setTimeout(function(){
                resolve( );
        } , t *1000 );
    })
    return p;
}

async function calculateTime(t1, t2, t3) {

    const start = Date.now();

    let promise1 =  wait1(t1);
    let promise2 =  wait2(t2);
    let promise3 =  wait3(t3);
    await Promise.all([promise1, promise2, promise3]);
    
    const totalTime = Date.now() - start;

    return totalTime; 
   
}

module.exports = calculateTime;

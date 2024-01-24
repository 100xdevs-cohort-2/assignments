/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const wait = require("./1-promisify-setTimeout");

function wait1(t) {
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("wait1 with "+t);
            resolve();
        },t)
    })
}

function wait2(t) {
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("wait2 with "+t);
            resolve();
        },t)
    })
    
}

function wait3(t) {
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("wait3 with "+t);
            resolve();
        },t)
    })
    
}

function calculateTime(t1, t2, t3) {
    const startTime= Date.now();
    return wait1(t1)
    .then(()=>wait2(t2))
    .then(()=>wait3(t3))
    .then(()=>{
        return Date.now()- startTime;
    })
}

// calculateTime(3000,2000,1000)
module.exports = calculateTime;

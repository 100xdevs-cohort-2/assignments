/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    });   
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start = new Date().getTime();
    let timee;
    return wait1(t1) // here we are returing the promise .......see the video of Akshy saini again
    .then(()=> {return wait2(t2)})
    .then(()=> {return wait3(t3)})
    .then(()=>{
        const end = new Date().getTime();
        timee = end-start;
        return timee; // this is inner arrow fun return
    });
}

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const startTime = Date.now();
    return new Promise(resolve =>{
        setTimeout(() => resolve(Date.now()-startTime),t*1000);
    });
}

function wait2(t) {
    const startTime = Date.now();
    return new Promise(resolve =>{
        setTimeout(() => resolve(Date.now()-startTime),t*1000);
    });
}

function wait3(t) {
    const startTime = Date.now();
    return new Promise(resolve =>{
        setTimeout(() => resolve(Date.now()-startTime),t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    return Promise.all([wait1(t1),wait2(t2),wait3(t3)])
    .then(values =>{
        return (values.reduce((maxVal, value)=>{
            return Math.max(maxVal, value);
        },values[0]));
    });
}

// console.log("calculate:",calculateTime(1,2,3));

module.exports = calculateTime;

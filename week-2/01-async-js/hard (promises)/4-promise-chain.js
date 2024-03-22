/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout((resolve), t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout((resolve), t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout((resolve), t*1000)
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = new Date();
    return new Promise((resolve) => {
        wait1(t1)   // called 1st fn
        .then(() => wait2(t2)) // 1st fn resolve then called 2nd fn
        .then(() => wait3(t3)) // 2nd fn resolve then called 3rd fn
        .then(() => { // 3rd fn resolve then resolve main promise
            resolve(new Date - startTime); // calculate time... :)
        });
    });
}

module.exports = calculateTime;

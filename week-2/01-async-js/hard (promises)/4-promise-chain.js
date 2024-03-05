/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },t*1000);
    });
}

function sequentialCall(t1, t2, t3){
    const currentTIme = new Date().getTime();
    return wait1(t1).then(() => {
        // console.log("wait 1 done.");
        return wait2(t2);
    })
    .then(() => {
        // console.log("Wait 2 done.");
        return wait3(t3);
    })
    .then(() => {
        // console.log("Wait 3 done.");
        // console.log("All funcitons called.");
        const newTime = new Date().getTime();
        let timeTaken = newTime - currentTIme;
        // console.log(timeTaken);
        return timeTaken;
    })
}

function calculateTime(t1, t2, t3) {
    return sequentialCall(t1, t2, t3);
}

// console.log(calculateTime(5, 2, 3));

module.exports = calculateTime;

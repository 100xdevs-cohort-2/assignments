/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    const p = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("wait1 finished in time ", t);
        }, t);
    });
    return p;
}

function wait2(t) {
    const p = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("wait2 finished in time ", t);
        }, t);
    });
    return p;
}

function wait3(t) {
    const p = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("wait3 finished in time ", t);
        }, t);
    });
    return p;
}

function calculateTime(t1, t2, t3) {
    const startTime = new Date();
    const p = new Promise(function (resolve) {
        wait1(t1).then(() => {
            console.log("wait1 finished in time");
            wait2(t2).then(() => {
                console.log("wait2 finished in time ");
                wait3(t3).then(() => {
                    console.log("wait3 finished in time");
                    const endTime = new Date();
                    console.log("total time taken=", endTime - startTime);
                })
            });
        });
    });
    return p;
}


module.exports = calculateTime;

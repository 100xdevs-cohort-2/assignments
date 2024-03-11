/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, result) => {
        setTimeout(() => {
            resolve();
        }, t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve, result) => {
        setTimeout(() => {
            resolve();
        }, t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve, result) => {
        setTimeout(() => {
            resolve();
        }, t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = new Date().getTime(); 
    return Promise.all([wait1(t1), wait1(t2), wait1(t3)])
        .then(() => {
            const timeEnd = new Date().getTime();
            return (timeEnd-startTime);
        })
}

module.exports = calculateTime;

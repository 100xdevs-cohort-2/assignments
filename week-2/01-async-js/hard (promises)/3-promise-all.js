/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve("First Promise Resolved")
        }, t * 1000)

    })
}

function wait2(t) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve("Second Promise Resolved");
        }, t * 1000)
    })
}

function wait3(t) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve("Third Promise Resolved");
        }, t * 1000)
    })
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    const p1 = wait1(t1);
    const p2 = wait2(t2);
    const p3 = wait2(t3);

    let promise_all = Promise.all([p1, p2, p3]);
    return promise_all.then(() => {
        end = Date.now();
        const difference = end - start;
        return difference;
    })
}

module.exports = calculateTime;

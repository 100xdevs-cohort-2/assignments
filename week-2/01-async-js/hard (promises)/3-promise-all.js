/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const p = new Promise(function (resolve) {
        setTimeout(function () { resolve("resolved wait 1") }, t);
    });
    return p;

}

function wait2(t) {
    const p = new Promise(function (resolve) {
        setTimeout(function () { resolve("resolved wait 2") }, t);
    });
    return p;
}

function wait3(t) {
    const p = new Promise(function (resolve) {
        setTimeout(function () { resolve("resolved wait 3") }, t);
    });
    return p;
}



function calculateTime(t1, t2, t3) {
    const p1 = wait1(t1);
    const p2 = wait1(t2);
    const p3 = wait1(t3);
    const startTime = new Date();
    Promise.all([p1, p2, p3]).then(function () {
        const endTime = new Date();
        console.log(`promise.all called after ${endTime - startTime}`);
    });
}

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve;
        }, n * 1000);
    });
}

function wait1(t) {
    return wait(t);
}

function wait2(t) {
    return wait(t);
}

function wait3(t) {
    return wait(t);
}

async function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    return totalTime;
}

module.exports = calculateTime;

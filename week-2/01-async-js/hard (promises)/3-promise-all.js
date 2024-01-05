/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t * 1000));
}

function wait1(t1) {
    return delay(t1).then(() => "Function 1");
}

function wait2(t2) {
    return delay(t2).then(() => "Function 2");
}

function wait3(t3) {
    return delay(t3).then(() => "Function 3");
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    const promise1 = wait1(t1);
    const promise2 = wait2(t2);
    const promise3 = wait3(t3);

    return Promise.all([promise1, promise2, promise3])
        .then(() => {
            const endTime = Date.now();
            const totalTime = endTime - startTime;
            return totalTime;
        });
}

module.exports = calculateTime;

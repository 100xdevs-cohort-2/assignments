/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((res) => setTimeout(res, t * 1000));
}

function wait2(t) {
    return new Promise((res) => setTimeout(res, t * 1000));
}

function wait3(t) {
    return new Promise((res) => setTimeout(res, t * 1000));
}

function calculateTime(t1, t2, t3) {
    const prom1 = wait1(t1);
    const prom2 = wait2(t2);
    const prom3 = wait3(t3);
    const time1 = new Date().getTime();
    return new Promise(resolve => {
        prom1.
        then(() => prom2)
        .then(() => prom3).then(() => {
            const time2 = new Date().getTime();
            return time2 - time1;
        })
    })
}

module.exports = calculateTime;

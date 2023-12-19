/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t * 1000);
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t * 1000);
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {

    const startTime = Date.now()
    console.log(Date.now() - startTime)

    const p1 = wait1(t1)
    const p2 = wait2(t2)
    const p3 = wait3(t3)

    return wait1(t1)
        .then((data) => {
            console.log(Date.now() - startTime)
            return wait2(t2)
        })
        .then((data) => {
            console.log(Date.now() - startTime)
            return wait3(t3)
        })
        .then((data) => {
            console.log(Date.now() - startTime)
            return Date.now() - startTime;
        })

}

module.exports = calculateTime;

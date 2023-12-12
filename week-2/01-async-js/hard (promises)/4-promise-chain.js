/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('foo1');
        }, 1000);
    })
}

function wait2(t) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('foo2');
        }, 2000);
    })
}

function wait3() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('foo3');
        }, 3000);
    })
}

function calculateTime(t1, t2, t3) {
    var startTime = new Date().getTime();
    wait1(t1).then(
        wait2(t2).then(
            wait3(t3).then(
                function() {
                    var endTime = new Date().getTime();
                    console.log("Time taken in milliseconds = ", (endTime - startTime));
                }
            )
        )
    )
}

calculateTime();
module.exports = calculateTime;


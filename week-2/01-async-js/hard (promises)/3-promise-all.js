/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitn(n) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), n * 1000);
    });
}


function calculateTime(t1, t2, t3) {
    let start = Date.now();
    return Promise.all([
        waitn(t1),
        waitn(t2),
        waitn(t3),
    ]).then(() => {
        return Date.now() - start;
    });

}

module.exports = calculateTime;

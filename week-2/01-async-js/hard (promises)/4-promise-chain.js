/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// different functions are redundant, hence used the same function

function wait(n) {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, n*1000);
    })
    
    return p;
}

function calculateTime(t1, t2, t3) {
    let start = new Date();
    let p = wait(t1).then(function() {
        return wait(t2);
    })
    .then(function () {
        return wait(t3);
    })
    .then(function () {
        let end = new Date();
        console.log("All promises have resolved after", (end - start)/1000, "seconds");
        return (end - start);
    })
    return p;
}

module.exports = calculateTime;
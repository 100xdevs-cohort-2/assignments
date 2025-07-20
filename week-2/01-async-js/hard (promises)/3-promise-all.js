/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve) {
        const beforeTime = Date.now(); // static method of Date class
        setTimeout(function() {
            const afterTime = Date.now(); // static method of Date class
            resolve(afterTime - beforeTime); // pass the time it take to get resolved
        }, t * 1000);
    })
}

function wait2(t) {
    return new Promise(function(resolve) {
        const beforeTime = Date.now();
        setTimeout(function() {
            const afterTime = Date.now();
            resolve(afterTime - beforeTime);
        }, t * 1000);
    })
}

function wait3(t) {
    return new Promise(function(resolve) {
        const beforeTime = Date.now();
        setTimeout(function() {
            const afterTime = Date.now();
            resolve(afterTime - beforeTime);
        }, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {
    // promise.all is used when we want to run multiple promise parallelly and wait until all the promise are resolved
    // promise.all also returns a promise that will be resolved when all the promises provided to it will be resolved
    // takes array of promise and then return the resolve value if present in the same orther
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function(timeArray) {
        
        const max = Math.max(...timeArray);

        return max;
    })
}

module.exports = calculateTime;

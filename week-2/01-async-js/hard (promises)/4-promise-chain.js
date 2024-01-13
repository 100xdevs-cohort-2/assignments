/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    });
}

function wait2(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    })
}

function wait3(t) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    let result = null;
    return new Promise(resolve => {
        wait1(t1)
            .then(() => wait2(t2), console.log('wait 1 ran'))
            .then(() => wait3(t3), console.log('wait 2 ran'))
            .then(() => {
                console.log('wait 3 ran');
                const end = Date.now();
                result = end - start;
                resolve(result);
            });
    });
    
}

console.log(calculateTime(1, 2, 3));





module.exports = calculateTime;

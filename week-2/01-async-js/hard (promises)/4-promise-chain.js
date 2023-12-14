/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved after 1 second');
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved after 2 seconds');
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved after 3 seconds');
        }, 3000);
    });
}

function calculateTime() {
    const startTime = new Date().getTime();
    waitOneSecond()
        .then((result) => {
            console.log(result);
            return waitTwoSecond();
        })
        .then((result) => {
            console.log(result);
            return waitThreeSecond();
        })
        .then((result) => {
            console.log(result);
            const endTime = new Date().getTime();
            const totalTime = endTime - startTime;
            console.log(`Total time taken: ${totalTime} milliseconds`);
        })
        .catch((error) => {
            console.error(error);
        });
}

calculateTime();
function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;

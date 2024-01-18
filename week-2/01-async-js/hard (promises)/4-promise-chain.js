/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
    const p = new Promise(function(resolve){
        setTimeout(() => {
            resolve();
        }, t1 * 1000);
    });
    return p;
}

function wait2(t2) {
    const p = new Promise(function(resolve){
        setTimeout(() => {
            resolve();
        }, t2 * 1000);
    });
    return p;
}

function wait3(t3) {
    const p = new Promise(function(resolve){
        setTimeout(() => {
            resolve();
        }, t3 * 1000);
    });
    return p;
}

async function calculateTime(t1, t2, t3) {
    const start = new Date();
    await wait1(t1);
    await wait2(t2);
    await wait3(t3);
    const end = new Date();
    return end - start;
}

calculateTime();

module.exports = calculateTime;

//Better code:
/*
const wait = (time) => new Promise(resolve => setTimeout(resolve, time * 1000));

const calculateTime = async (t1, t2, t3) => {
    const start = new Date();
    await wait(t1);
    await wait(t2);
    await wait(t3);
    const end = new Date();
    return end - start;
};
calculateTime();

module.exports = calculateTime;
*/
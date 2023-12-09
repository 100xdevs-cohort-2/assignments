/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve => setTimeout(resolve,1000))
}

function waitTwoSecond() {
    return new Promise(resolve => setTimeout(resolve,2000))
}

function waitThreeSecond() {
    return new Promise(resolve => setTimeout(resolve,3000))
}

async function calculateTime() {
const start = performance.now();
const first = await waitOneSecond();
const second = await waitTwoSecond();
const third = await waitThreeSecond();
const end = performance.now();
console.log(`${Math.floor(end - start) / 1000} s`);
}

calculateTime();

//it takes approx 2x the time of 3-promise-all.js
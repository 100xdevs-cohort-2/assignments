/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


async function waitOneSecond(t1) {
    return new Promise((resolve)=> {
        setTimeout(resolve, t1*1000);
    });
}

function waitTwoSecond(t2) {
    return new Promise((resolve)=> {
        setTimeout(resolve, t2*1000);
    });

}

function waitThreeSecond(t3) {
    
    return new Promise((resolve)=> {
        setTimeout(resolve, t3*1000);
    });

}

async function calculateTime(a,b,c) {
    let startDate = new Date();
    await waitOneSecond(a);
    await waitTwoSecond(b);
    await waitThreeSecond(c);
    let endDate = new Date();
    return endDate - startDate;
}

module.exports = calculateTime;
/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve,t* 1000);
    })
}
async function calculateTime(t1,t2,t3) {
    let now = Date.now();
    await wait(t1);
    await wait(t2);
    await wait(t3);
    console.log(Date.now() - now);
}

calculateTime(4,5,7);
/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    let p = new Promise((resolve) => {
        setTimeout(() => {resolve()}, 1000);
    });
    return p;
}

function waitTwoSecond() {
    let p = new Promise((resolve) => {
        setTimeout(() => {resolve()}, 2000);
    });
    return p;
}

function waitThreeSecond() {
    let p = new Promise((resolve) => {
        setTimeout(() => {resolve()}, 3000);
    });
    return p;
}

function calculateTime() {
    let start = new Date().getTime();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(() => {
        let end = new Date().getTime();
        console.log("Promise.all -> Time Taken by " + (end - start));
    });
}

calculateTime()
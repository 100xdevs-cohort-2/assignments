/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hi there 1");
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hi there 2");
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hi there 3");
        }, 3000);
    });
}

function calculateTime() {
    const e = new Date();
    const timeTaken = e - s;
    console.log("Time taken:", timeTaken, "milliseconds");

}

const s = new Date();
Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(results => {
    results.forEach(result => console.log(result));
    calculateTime(s);});
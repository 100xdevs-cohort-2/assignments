/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait1(t) {

}

function wait2(t) {
function waitOneSecond() {
    return new Promise((resolve) =>{
        setTimeout(resolve, 1000);
    });

}

function wait3(t) {
function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve, 2000)
    });

}

function calculateTime(t1, t2, t3) {

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000)
    });
}

async function calculateTime() {
    let start = Date.now();
    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
    return Date.now() - start;
}
module.exports = calculateTime;

calculateTime().then((time) => console.log(time));
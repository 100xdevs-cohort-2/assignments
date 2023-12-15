/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitOneSecond")},1000);
    })
}

function wait2(t) {

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitTwoSecond")},2000);
    })
}

function wait3(t) {

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitTwoSecond")},3000);
    })
}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;

async function calculateTime() {
    const startTime = Date.now();
  const prom1 = await waitOneSecond(t1);
  const prom2 = await waitTwoSecond(t2);
  const prom3 = await waitThreeSecond(t3);
  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  console.log(timeTaken);
}
calculateTime();
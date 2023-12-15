/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitOneSecond")},1000);
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitTwoSecond")},2000);
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitTwoSecond")},3000);
    })
}

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
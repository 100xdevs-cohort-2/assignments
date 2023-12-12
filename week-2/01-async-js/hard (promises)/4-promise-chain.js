/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

async function calculateTime() {
  let startTime = Date.now();
  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();
  let endTime = Date.now();
  console.log(endTime - startTime);
}

function calculateTime(t1, t2, t3) {}

module.exports = calculateTime;

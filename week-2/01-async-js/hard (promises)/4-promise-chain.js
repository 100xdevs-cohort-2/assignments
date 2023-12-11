/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1 * 1000, 1);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2 * 1000, 2);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3 * 1000, 3);
  });
}

function calculateTime() {
  const startTime = Date.now();
  waitOneSecond()
    .then(() => waitTwoSecond())
    .then(() => waitThreeSecond())
    .finally(() => {
      const endTime = Date.now();
      const elapsed = endTime - startTime;
      const seconds = elapsed / 1000;
      console.log(`It took ${seconds} seconds.`);
    });
}

async function calculateTimeX() {
  const startTime = Date.now();
  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();
  const endTime = Date.now();
  const elapsed = endTime - startTime;
  const seconds = elapsed / 1000;
  console.log(`It took ${seconds} seconds for X.`);
}

calculateTimeX();
calculateTime();

/**
 * Comparison Result:
 *  sequentially resolving promises is slower than resolving all together
 * sequentially(this) double the time as compared to using Promise.all
 * No difference in different syntax(then, async/await) implementation noticable by me
 */

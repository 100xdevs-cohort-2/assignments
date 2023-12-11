/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then()
    .catch((e) => console.error({ e }))
    .finally(() => {
      const endTime = Date.now();
      const elapsed = endTime - startTime;
      const seconds = elapsed / 1000;
      console.log(`It took ${seconds} seconds.`);
    });
}

async function calculateTimeX() {
  const startTime = Date.now();
  await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
  const endTime = Date.now();
  const elapsed = endTime - startTime;
  const seconds = elapsed / 1000;
  console.log(`It took ${seconds} seconds for X.`);
}

calculateTimeX();
calculateTime();

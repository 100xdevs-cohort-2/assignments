/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitOneSecond() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("resolved after 1 second"), 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("resolved after 2 second"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("resolved after 3 second"), 3000);
  });
}

async function calculateTime() {
  const startTime = new Date();
  const arr = await Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]);
  console.log(
    `time taken to resolve all the three promises ${Date.now() - startTime}ms`
  );
  console.log(arr);
}

calculateTime();

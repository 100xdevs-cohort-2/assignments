/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third Promise");
    }, 3000);
  });
}

function calculateTime() {
  const startTime = new Date().getTime();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (result) => {
      const endTime = new Date().getTime();
      console.log(result);
      console.log(
        `took ${endTime - startTime} milliseconds to resolve all promises`
      );
    }
  );
}

calculateTime();

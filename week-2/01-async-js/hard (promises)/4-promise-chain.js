/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hehe`);
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hehe`);
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hehe`);
    }, 3000);
  });
}

function calculateTime() {
  const start = new Date().getTime();
  waitOneSecond()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  waitTwoSecond()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  waitThreeSecond()
    .then((result) => {
      console.log(result);
      const end = new Date().getTime();
      console.log((end - start) / 1000);
    })
    .catch((error) => {
      console.error(error);
    });
}

calculateTime();

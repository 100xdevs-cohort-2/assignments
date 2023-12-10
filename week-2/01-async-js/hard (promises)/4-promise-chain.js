/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
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

function calculateTime() {
  const startTime = new Date().getTime();

  waitOneSecond().then(() => {
    const endTime = new Date().getTime();
    console.log(
      "first promise resolved in",
      (endTime - startTime) / 1000 + "sec"
    );
    waitTwoSecond().then(() => {
      const endTime = new Date().getTime();
      console.log(
        "second promise resolved in",
        (endTime - startTime) / 1000 + "sec"
      );
      waitThreeSecond().then(() => {
        const endTime = new Date().getTime();
        console.log(
          "third promise resolved in",
          (endTime - startTime) / 1000 + "sec"
        );
      });
    });
  });
}

calculateTime();

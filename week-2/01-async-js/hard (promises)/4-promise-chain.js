/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

function calculateTime() {
  const startTime = new Date();
  waitOneSecond().then((res) => {
    console.log(res);
    waitTwoSecond().then((res) => {
      console.log(res);
      waitThreeSecond().then((res) => {
        console.log(res);
        console.log("time passed", Date.now() - startTime);
      });
    });
  });
}

async function calculateTimeAsync() {
  const startTime = new Date();
  const res1 = await waitOneSecond();
  const res2 = await waitTwoSecond();
  const res3 = await waitThreeSecond();
  console.log(res1, res2, res3);
  console.log(Date.now() - startTime);
}

calculateTimeAsync();

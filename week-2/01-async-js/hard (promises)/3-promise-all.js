/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after 1 sec`);
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 sec");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 3 sec");
    }, 3000);
  });
}

function calculateTime() {
  const startTime = Date.now();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((results) => {
      const endTime = Date.now();
      const totalTime = endTime - startTime;

      console.log("All promises resolved in", totalTime / 1000, "seconds");
      console.log("Results:", results);
    })
    .catch((err) => {
      console.log(err);
    });
}

calculateTime();

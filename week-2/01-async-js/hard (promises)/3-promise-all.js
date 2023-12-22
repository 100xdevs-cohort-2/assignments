/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First Promise resolved");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second Promise resolved");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Third Promise resolved");
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const start = Date.now();
  console.log("Start time : ", start);
  const p1 = await wait1(t1);
  const p2 = await wait2(t2);
  const p3 = await wait3(t3);

  await Promise.all([p1, p2, p3]); //!imp

  const end = Date.now();
  console.log("End time : ", start);

  const difference = end - start;
  return difference;
}
async function main() {
  let ans = await calculateTime(1, 2, 3); //input
  console.log("Difference : ", ans);
}

main();

module.exports = calculateTime;

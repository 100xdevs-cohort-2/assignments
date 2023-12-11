/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

console.log("before " + new Date());
const waitOneSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
const waitTwoSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
const waitThreeSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});

// Using .catch:

function calculateTime() {
  Promise.all([waitOneSecond, waitTwoSecond, waitThreeSecond])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
calculateTime();

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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


function calculateTime(t1, t2, t3) {
Promise.all([t1, t2, t3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

module.exports = calculateTime;


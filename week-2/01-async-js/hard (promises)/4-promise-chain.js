/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


let waitOneSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});

let waitTwoSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});

let waitThreeSecond = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});



function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {
 t1.then(() => {
    console.log("waiteed 1 seconds");
    t2.then(() => {
      console.log("waiteed 2 seconds");
      t3.then(() => {
        console.log("waiteed 3 seconds");
      });
    });
  });
}

module.exports = calculateTime;


/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  console.log("entered 1");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, t);
  });
}

function wait2(t) {
  console.log("entered 2");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2");
    }, t);
  });
}

function wait3(t) {
  console.log("entered 3");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, t);
  });
}

function calculateTime(t1, t2, t3) {
  Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.log("error", e));
}
calculateTime(2000, 3000, 5000);

// let a = 1;
// setInterval(() => {
//   console.log(a);
//   a++;
// }, 1000);

module.exports = calculateTime;

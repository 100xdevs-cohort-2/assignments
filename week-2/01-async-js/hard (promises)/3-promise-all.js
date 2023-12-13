/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Executes after 1 sec");
    }, t1 * 1000);
  });
}

function wait2(t2) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Executes after 2 sec");
    }, t2 * 1000);
  });
}

function wait3(t3) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Executes after 3 sec");
    }, t3 * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  var start = performance.now();
  Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    var end = performance.now() - start;
    console.log(
      `Total time taken for all the promises to resolve (ms): ${end}` //About 3000 ms
    );
  });
}

calculateTime(1, 2, 3);

//--To print resolve statements as soon as they are executed--
// function calculateTime() {
//   var start = Date.now();
//   Promise.all([
//     waitOneSecond().then((result) => {
//       console.log(result);
//     }),
//     waitTwoSecond().then((result) => {
//       console.log(result);
//     }),
//     waitThreeSecond().then((result) => {
//       console.log(result);
//     }),
//   ]).then(() => {
//     var end = Date.now() - start;
//     console.log(`Time taken by all promises together: ${end}`);
//   });
// }

module.exports = calculateTime;

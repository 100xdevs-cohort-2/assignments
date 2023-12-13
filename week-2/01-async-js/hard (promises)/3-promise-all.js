/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Executes after 1 sec");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Executes after 2 sec");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Executes after 3 sec");
    }, 3000);
  });
}

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

//--ask--
function calculateTime() {
  var start = performance.now();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    () => {
      var end = performance.now() - start;
      console.log(
        `Total time taken for all the promises to resolve (ms): ${end}` //About 3000 ms
      );
    }
  );
}

calculateTime();

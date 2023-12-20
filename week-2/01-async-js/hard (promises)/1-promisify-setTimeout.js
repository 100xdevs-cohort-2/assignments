/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function (resolves) {
    setTimeout(function () {
      resolves();
    }, n * 1000);
  });
}
let a = wait(3000);
a.then(function () {
  console.log(a);
});

module.exports = wait;

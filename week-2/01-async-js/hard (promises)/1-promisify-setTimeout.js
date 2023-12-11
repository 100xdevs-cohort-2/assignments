/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

  return (new Promise((resolve) => setTimeout(resolve, n * 1000)).then(() =>
    console.log("promise resolved " + new Date())
  ).catch = (e) => {
    console.log(e);
  });
}
console.log("strt " + new Date());
wait(5);

module.exports = wait;


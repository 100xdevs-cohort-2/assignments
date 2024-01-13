/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, n * 1000);
  });
}

wait(4)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

module.exports = wait;

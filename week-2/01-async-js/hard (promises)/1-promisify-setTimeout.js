/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });

  return promise;
}

// console.log(wait(5000));
// wait(5000).then((res) => console.log(res));

module.exports = wait;

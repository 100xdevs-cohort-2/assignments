/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(`Promise resolved after ${n} seconds`);
      }, n * 1000);
    });
  }
  
  wait(3)
    .then(function (message) {
      console.log(message);
    })
    .catch(function (error) {
      console.error(error);
    });
  
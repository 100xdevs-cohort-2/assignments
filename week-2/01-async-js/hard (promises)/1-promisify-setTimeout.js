/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promise resolved after ${n} seconds`);
      }, n * 1000);
    });
  }
  
  wait(3)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  module.exports = wait;
  

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
<<<<<<< HEAD
}

module.exports = wait;
=======
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise resolved successfully");
    }, n * 1000);
  });
}

wait(5).then((message) => {
  console.log(message);
});
>>>>>>> 43314b7 (1-promiseSetTimeout done)

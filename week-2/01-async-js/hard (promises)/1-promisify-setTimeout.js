/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function (resolve) {
    //1st arg of a Promise class needs to be a function with (resolve) argument.
    setTimeout(function () {
      //callback
      resolve();
    }, n * 1000);
  });
}

function delay(n) {
  console.log(`A promise returned after some seconds`);
}

wait(5).then(delay);
//useful for chaining of function those are interdependent.

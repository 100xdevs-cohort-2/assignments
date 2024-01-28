/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let myPromise = new Promise((resolve, reject) => {
    console.log("Promise is Pending...");
    setTimeout(function () {
      resolve("Promise is Resolved...");
    }, n);
  });

  myPromise.then(function (value) {
    console.log(value);
    console.log(myPromise);
  });
  return myPromise;
}

module.exports = wait;

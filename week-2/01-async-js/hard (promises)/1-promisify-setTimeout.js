/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promisfy(n) {
  return new Promise((resolve, _) => {
    // console.log('Promise Construcutor');
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

function wait(n) {
  // console.log('Promise Started');
  return promisfy(n);
  // console.log('Promise Fullfilled');
  // console.log('Promise Made');
}

module.exports = wait;

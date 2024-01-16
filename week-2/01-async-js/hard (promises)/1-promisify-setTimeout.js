/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, n);
      });
}

module.exports = wait;

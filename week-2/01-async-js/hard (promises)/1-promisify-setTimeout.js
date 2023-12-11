/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, n);
    });
    return myPromise;
}

module.exports = wait;

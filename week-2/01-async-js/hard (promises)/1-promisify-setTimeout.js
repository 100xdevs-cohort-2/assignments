/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), milliseconds * 1000);
    });
}
module.exports = wait;

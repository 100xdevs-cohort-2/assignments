/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const milliseconds = n * 1000; // Convert seconds to milliseconds

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("i am resolved");
            resolve();
        }, milliseconds);
    });
}

module.exports = wait
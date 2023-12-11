/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const newPromise = new Promise(function(resolve){
        setTimeout((){},n);
        resolve();
    })
    return newPromise;
}

module.exports = wait;

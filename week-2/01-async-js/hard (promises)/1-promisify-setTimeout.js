/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve) {
        // resolve gets mapped with the function that we pass inside .then 
        // hence calling resolve makes the actual function call
        setTimeout(resolve, n * 1000);
    })
}

module.exports = wait;

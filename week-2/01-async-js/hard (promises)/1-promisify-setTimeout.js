/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) =>{
        setTimeout(resolve , n*1000) // so this is how our promise will resolve after the n second 
    })
}

module.exports = wait;

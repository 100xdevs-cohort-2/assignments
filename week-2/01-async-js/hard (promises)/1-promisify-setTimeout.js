/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise = new Promise(function (resolve , reject){
        setTimeout(resolve,n*1000);
    });
    return promise;
}

module.exports = wait;

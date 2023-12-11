/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let ms = n*1000;
    if(ms<1000){
        return -1;
    }
    const promise = new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    return promise;
}

module.exports = wait;

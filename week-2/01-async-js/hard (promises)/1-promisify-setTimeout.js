/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("Hello Manoj")},n*1000);
    })
}

module.exports = wait;

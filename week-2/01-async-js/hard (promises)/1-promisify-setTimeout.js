/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('foo')
        }, n*1000);
    }) 
}

function onDone() {
    console.log('promise has resolved');
}

wait(5).then(onDone);

module.exports = wait;
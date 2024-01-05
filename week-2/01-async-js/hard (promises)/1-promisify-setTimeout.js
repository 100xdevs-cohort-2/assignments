/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p = new Promise(function (resolve) {
        setTimeout(() => { resolve(`timeout done after ${n} seconds`) }, n * 1000);
    })
    return p;
}

wait(3).then(function (result) {
    console.log(result);
});


module.exports = wait;

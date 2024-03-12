/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    setTimeout(() => {
        console.log(n+" time has passed.")
    },n);
}
// wait(5000);
module.exports = wait;

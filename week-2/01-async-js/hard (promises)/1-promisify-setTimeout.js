/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(milliseconds) {

    return new Promise((res,rej)=>{
        setTimeout(res,milliseconds);
    })
}
module.exports = wait;


/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function printOnDone(){
    console.log("Nice");
}
function wait(n) {
    return new Promise(function(reslove){
        setTimeout(reslove,n);
    })
}
let a = wait(6000);

a.then(printOnDone);

module.exports = wait;

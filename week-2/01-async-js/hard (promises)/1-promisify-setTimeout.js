/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve) {
        setTimeout(function (){
            resolve();
        }, n*1000);
    })
}

// console.log("Before Fn call");
// // ==== Function call ====
// wait(10).then(function (data){ 
//     console.log(data);
// }, function (err) {
//     console.log("Error: " + err);
// })
// console.log("After Fn call");


module.exports = wait;

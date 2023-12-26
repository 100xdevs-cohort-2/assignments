/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
let counter=0;
function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(counter++);
        },n*1000);
        resolve();
    })
}
module.exports = wait;

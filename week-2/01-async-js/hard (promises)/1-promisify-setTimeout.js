/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    //Creating Promise using the construtor just like the create "new instance of any class"
    const P = new Promise(function(resolve,reject){
        
        setTimeout(()=>{
            resolve();
        },n*1000);
    })
    return P
}

module.exports = wait;

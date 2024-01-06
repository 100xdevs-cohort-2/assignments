/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    var d = new Promise(function(resolve){
        setTimeout(function(){
           resolve();
        }, n*1000);
    })

    return d;
}

module.exports = wait;

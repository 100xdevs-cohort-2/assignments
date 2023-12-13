/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    console.log("wait for "+ n +" seconds");
    return p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Function resolved");
        }, n*1000);
    });
}

wait(3).then(function(value){
    console.log(value);
})
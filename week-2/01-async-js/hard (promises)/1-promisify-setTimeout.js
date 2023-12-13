/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p = new Promise(function(resolve){
        setTimeout(resolve, n);
    });
    return p;

}

wait(n).then(function(){
    console.log("received resolve");
})


module.exports = wait;

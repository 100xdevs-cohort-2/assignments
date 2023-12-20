/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(()=>{resolve("Hello")}, n * 1000)
    })
}

// Should resolve be inside or outside setTimeout?

wait(5).then((d)=>{console.log(d)});

module.exports = wait;

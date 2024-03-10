/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log(`After ${n} seconds`);
        }, n*1000)
    })
}

wait(4)

module.exports = wait;
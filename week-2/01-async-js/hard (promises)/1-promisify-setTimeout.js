/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const ans = new Promise(function(resolve){
        setTimeout(resolve, n*1000);
    })
    return ans;
}

wait(5).then(()=>{
    console.log("Ended");
});

module.exports = wait;
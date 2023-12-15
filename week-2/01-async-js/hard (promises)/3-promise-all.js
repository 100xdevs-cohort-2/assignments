/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitOneSecond")},1000);
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitTwoSecond")},2000);
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("waitTwoSecond")},3000);
    })
}

function calculateTime() {
    let one = waitOneSecond();
    let two = waitTwoSecond();
    let three = waitThreeSecond();
    let start = Date.now();
    Promise.all([one,two,three]).then((value)=>{
        const endTime = Date.now();
    let timeTaken = endTime - start;
        console.log(value+" time: "+timeTaken);
    })
}

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(n) {
    const ans = new Promise(function(resolve){
        setTimeout(resolve, n*1000);
    })
    return ans;
}

function waitTwoSecond(n) {
    const ans = new Promise(function(resolve){
        setTimeout(resolve, n*1000);
    })
    return ans;
}

function waitThreeSecond(n) {
    const ans = new Promise(function(resolve){
        setTimeout(resolve, n*1000);
    })
    return ans;
}

async function calculateTime(a, b, c) {
    const t1 = Date.now();
    const p1 = await waitOneSecond(a).then(()=>{
        console.log("1 sec wait done")
    });
    const p2 = await waitTwoSecond(b).then(()=>{
        console.log("2 sec wait done")
    });
    const p3 = await waitThreeSecond(c).then(()=>{
        console.log("3 sec wait done")
    });
    const t2 = Date.now();
    return t2-t1;
}
calculateTime(1,2,3);

module.exports = calculateTime;
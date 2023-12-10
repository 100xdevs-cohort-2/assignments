/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

async function calculateTime(t1, t2, t3) {
    const p1 = waitOneSecond(t1);
    const p2 = waitTwoSecond(t2);
    const p3 = waitThreeSecond(t3);

    const time1 = Date.now();
    await Promise.all([p1, p2, p3]).then(()=>{
        console.log("Wait over !!");
    })
    const time2 = Date.now();
    return time2-time1;
}

module.exports = calculateTime;
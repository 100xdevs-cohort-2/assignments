/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait1(t) {
    return new Promise((resolve) =>{
        setTimeout(resolve, t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve, t*1000)
    });
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve, t*1000)
    });
}

async function calculateTime(t1, t2, t3) {
    let start = Date.now();
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
    return Date.now() - start;
}


async function printTimeDiff(){
    const diff = await calculateTime(1, 2, 3);
    console.log(diff);
}

printTimeDiff();

module.exports = calculateTime;
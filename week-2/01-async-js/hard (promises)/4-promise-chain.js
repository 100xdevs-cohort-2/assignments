/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

async function calculateTime(t1, t2, t3) {
    let startDate = new Date();
    let startTime = startDate.getTime();
    const p1 = await wait1(t1);
    const p2 = await wait2(t2);
    const p3 = await wait3(t3);

    return Promise.all([p1,p2,p3]).then(function(resolve){
        let endDate = new Date();
        let endTime = endDate.getTime();
        return endTime-startTime;
    })


}

module.exports = calculateTime;

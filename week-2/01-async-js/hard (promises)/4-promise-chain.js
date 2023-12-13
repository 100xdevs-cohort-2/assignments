/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait1(t) {
    return new Promise((resolve) =>{
        setTimeout(resolve, 1000);
    });

}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve, 2000)
    });

}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000)
    });
}

async function calculateTime(t1, t2, t3) {
    let start = Date.now();
    await waitOneSecond().then(waitTwoSecond).then(waitThreeSecond);
    return Date.now() - start;
}

}

module.exports = calculateTime;

calculateTime().then((time) => console.log(time));
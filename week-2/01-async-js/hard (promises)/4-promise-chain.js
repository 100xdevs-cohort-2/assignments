/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

async function wait1(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(t), t * 1000);
    })
}

async function wait2(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(t), t * 1000);
    })
}

async function wait3(t) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(t), t * 1000);
    })
}

async function calculateTime(t1, t2, t3) {
    const beforeTime = new Date().getTime();
    const afterTime = await wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            return new Date().getTime();
        })
        .catch((error)=>{
            console.error(error.message);
            throw error;
        });
    return (afterTime - beforeTime);
}

module.exports = calculateTime;

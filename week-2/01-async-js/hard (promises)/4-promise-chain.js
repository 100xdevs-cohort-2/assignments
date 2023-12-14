/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t)
    });
}

function wait2(t) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t)
    });
}

function wait3(t) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t)
    });
}

function calculateTime(t1, t2, t3) {

    var startTime = Date.now();

    // promise chaining
    return wait1(t1 * 1000)
    .then((results) => {
        console.log(results);
        return wait2(t2 * 1000);
    })
    .then((results) => {
        console.log(results)
        return wait3(t3 * 1000);
    })
    .then((results) => {
        console.log(results);
        var endTime = Date.now();
        var timeTaken = endTime - startTime;
        return timeTaken;
    })
    .catch((err) => {
        console.log(err)
    })
    
}


async function main() {
    try {
        const t = await calculateTime(1, 2, 3);
        console.log(`Total time taken: ${t} milliseconds`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

main();


main()


module.exports = calculateTime;

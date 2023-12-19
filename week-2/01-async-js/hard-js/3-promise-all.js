/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t1);
    });
}

function wait2(t2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t2);
    });
}

function wait3(t3) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t3);
    });
}

function calculateTime(t1, t2, t3) {
    const start = new Date().getTime();

   return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
        .then(() => {
            return Date.now() - start; // Return the time taken
        })
        .catch((error) => {
            console.error(error);
            throw error; // Propagate the error if any of the promises rejects
        });
}

const t1 = 1000;
const t2 = 2000;
const t3 = 1000;

calculateTime(t1, t2, t3)
    .then((timeTaken) => {
        console.log(Date.now())
        console.log(`All promises resolved in ${timeTaken} milliseconds.`);
        console.log(Date.now())
    })
    .catch((error) => {
        console.error('At least one promise was rejected:', error);
    });


module.exports = calculateTime;

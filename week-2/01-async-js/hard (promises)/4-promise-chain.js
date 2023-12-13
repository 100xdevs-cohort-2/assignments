/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved in one seconds");
        }, 1000)
    });
}

function wait2(t) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved in two seconds");
        }, 2000)
    });
}

function wait3(t) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved in three seconds");
        }, 3000)
    });
}

function calculateTime(t1, t2, t3) {

<<<<<<< HEAD
    console.time("Time Taken to resolve all the three Promises");

    waitOneSecond()
    .then((results) => {
        console.log(results);
        return waitTwoSecond();
    })
    .then((results) => {
        console.log(results)
        return waitThreeSecond();
    })
    .then((results) => {
        console.log(results);
        console.timeEnd("Time Taken to resolve all the three Promises")
    })
    .catch((err) => {
        console.log(err)
    })
    
}


function main(){
    
    calculateTime();
}
main()
=======
}

module.exports = calculateTime;
>>>>>>> upstream/master

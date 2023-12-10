/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved in one seconds");
        }, 1000)
    });
}

function waitTwoSecond() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved in two seconds");
        }, 2000)
    });
}

function waitThreeSecond() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved in three seconds");
        }, 3000)
    });
}

function calculateTime() {

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

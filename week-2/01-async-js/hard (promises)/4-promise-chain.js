/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    // returning the promise 1 
    let returnPromise = new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve();
        }, t*1000);
    })

    // say everything went fine 
    return returnPromise;
}

function wait2(t) {
    // returning the promise 2
    let returnPromise = new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve();
        }, t*1000);
    });

    // say everything went fine 
    return returnPromise;
}

function wait3(t) {
    // returning promise 3 
    let returnPromise = new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve();
        }, t*1000);
    });

    // say everything went fine 
    return returnPromise;
}

function calculateTime(t1, t2, t3) {
    // let returnPromise1 = wait1(t1);
    // let returnPromise2 = wait2(t2);
    // let returnPromise3 = wait3(t3);
    // defining the array for this purpose 
    // let resultArray = [];
    // let maxTime = Date.now();
    let startTime = Date.now();
    // let returnPromise;
    // now we have to do the chaining in this case for solving this question 
    wait1(t1)
    .then(() => {
        // console.log("the result of the first asynchronous function is as follows \n", result1);
        // resultArray.push(result1);
        // now we have to return a new promise to the response of this function for this purpose 
        return wait2(t2);
    }) 
    .then(() => {
        // console.log("the result of the second asynchronous function is as follows \n", result2);
        // resultArray.push(result2);
        return wait3(t3);
    })
    .then(() => {
        return (Date.now()-startTime);
    })

    // let returnPromise4 =  new Promise ((resolve, reject) => {
    //     resolve(maxTime - startTime);
    // });

    // console.log(await returnPromise4);
    // say everything went fine 
    // return returnPromise;
}

// async function  main () {
//     const finalAnswers = await calculateTime(1, 2, 3);
//     // console.log("the final answer is as follows\n", finalAnswers);
// }

// main();
module.exports = calculateTime;

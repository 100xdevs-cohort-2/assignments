<<<<<<< HEAD
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("First promise resolved");
        }, t * 1000);
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Second promise resolved");
        }, t * 1000);
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Third promise resolved");
        }, t * 1000);
    });
}

async function calculateTime(t1, t2, t3) {
    const start = Date.now();
    //console.log("Start time : ", start);
    const p1 = await wait1(t1);
    const p2 = await wait2(t2);
    const p3 = await wait3(t3);


    const end = Date.now();
    //console.log("End time : ", end);
    const diff = end - start;

    return diff;
}

async function main(){
    let ans = await calculateTime(1, 2, 3);

    console.log("Difference : ", ans);
}

main();

module.exports = calculateTime;
||||||| empty tree
=======
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;
>>>>>>> a3fa79c5a8030e58d055c1b728d3df963fe878fd

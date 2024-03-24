<<<<<<< HEAD
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
    const [result1, result2, result3] = await Promise.all([
        wait1(t1),
        wait2(t2),
        wait3(t3)
    ]);

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
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
// let t = 1;

function wait(t) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve();
        }, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    return wait(t1)
    .then(() => wait(t2))
    .then(() => wait(t3))
    .then(() => {
        const totalTime = Date.now() - startTime;

    return totalTime;
    });
    

    
}

module.exports = calculateTime;


// wait1().then((value) => {
//     console.log(value);

//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             resolve("2nd promise done");
//         }, t * 3000);
//     })
// }).then((value) => {
//     console.log(value);

//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             resolve("3rd promise done");
//         }, t * 5000);
//     })
// }).then((value) => {
//     console.log(value);
// })

// function wait2(t) {
//     return new Promise((resolve, reject) => {
//         if(reject){
//             console.log("Error occured");
//         }
//         setTimeout(() => {
//             resolve("2nd promise done");
//         }, t * 1000);
//     })
// }

// function wait3(t) {
//     return new Promise((resolve, reject) => {
//         if(reject){
//             console.log("Error occured");
//         }
//         setTimeout(() => {
//             resolve("3rd promise done");
//         }, t * 1000);
//     })
// }





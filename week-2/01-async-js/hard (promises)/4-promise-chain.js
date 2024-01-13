/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t * 1000);
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t * 1000);
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t * 1000);
    })
}

// using .then syntex (inside using arrow function)

// function calculateTime(t1, t2, t3) {

//     const startTime = Date.now();
  
//     return wait1(t1)
//       .then(() => wait2(t2))
//       .then(() => wait3(t3))
//       .then(() => {
//         const endTime = Date.now();
//         const elapsedTime = endTime - startTime;
//         return elapsedTime;
//       });
//   }

// using async await syntax
// async function calculateTime(t1,t2,t3){
//     const startTime = Date.now();
//     await wait1(t1);
//     await wait2(t2);
//     await wait3(t3);
//     const endTime = Date.now();
//         const time = endTime - startTime;
//         return time;
// }


// using .then syntex (inside not using arrow function)
function calculateTime(t1,t2,t3){
    const startTime = Date.now();
    return wait1(t1)
    .then(function(){
        return wait2(t2);
    })
    .then(function(){
        return wait3(t3);
    })
    .then(function(){
        const endTime = Date.now();
        const time = endTime - startTime;
        return time;
    });
    
}

module.exports = calculateTime;
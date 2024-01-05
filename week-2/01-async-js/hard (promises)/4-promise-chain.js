/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(resolve=>{
     setTimeout(
         resolve
     , t*1000);
    })
}

function wait2(t) {
 return new Promise(resolve=>{
     setTimeout(
         resolve
     , t*1000);
    })
}

function wait3(t) {
 return new Promise(resolve=>{
     setTimeout(
         resolve
     , t*1000);
    })
}

function calculateTime(t1, t2, t3) {
let s=new Date().getTime();
return  wait1(t1).then(()=>{return wait2(t2);}).then(()=>{return wait3(t3)}).then(()=>{
     let e=new Date().getTime();
     return (e-s);
 })

}


// function waitOneSecond(a) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, a*1000);
//     });
// }

// function waitTwoSecond(b) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, b*1000);
//     });
// }

// function waitThreeSecond(c) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, c*1000);
//     });
// }

// function calculateTime(a,b,c) {

//     let start = Date.now();
//      return waitOneSecond(a).then(() => 
//          waitTwoSecond(b)
//     ).then(() =>
//          waitThreeSecond(c)
//     ).then(() => 
//         Date.now()-start 
//      );
// }
// // calculateTime();

module.exports = calculateTime;

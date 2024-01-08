/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
     setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
 return new Promise((resolve,reject)=>{
     setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
 return new Promise((resolve,reject)=>{
     setTimeout(resolve,t*1000);
    })
}

function calculateTime(t1, t2, t3) {
 let start=new Date().getTime();
return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(()=>{
 let endtime=new Date().getTime();
 return (endtime-start);
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
//         },c*1000 );
//     });
// }

//   async function calculateTime(a, b, c) {

//     let start = Date.now();
//      await  Promise.all([waitOneSecond(a), waitTwoSecond(b), waitThreeSecond(c)]);
//     return Date.now() - start;
//     };

// // calculateTime();


module.exports = calculateTime;

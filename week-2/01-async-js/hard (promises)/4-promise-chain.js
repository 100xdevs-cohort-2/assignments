/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((res,rej)=>{
       setTimeout(res,1000);
    })
   }
   
function waitTwoSecond() {
    return new Promise((res,rej)=>{
        setTimeout(res,2000);
    })
}
   
function waitThreeSecond() {
    return new Promise((res,rej)=>{
        setTimeout(res,3000);
    })
}

function calculateTime() {
    const s=new Date().getTime();
    waitOneSecond()
    .then(waitTwoSecond)
    .then(waitThreeSecond)
    .then(()=>{
        const e=new Date().getTime();
        console.log(e-s)
    })
}
calculateTime();
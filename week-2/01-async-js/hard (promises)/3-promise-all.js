/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()])
    .then(()=>{
        const e=new Date().getTime();
        console.log(e-s);
    })
}

calculateTime();
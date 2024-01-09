/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start = new Date().getTime();
    return Promise.all([wait1(t1),wait2(t2),wait3(t3)])
    .then(()=>{ // if we dont apply return here it will internally return the undefined , so we nee dto explictlly return the promise every time we use promise.
        const end = new Date().getTime();
        return end - start; //this return statement is for the arrow funtion
    })
}

module.exports = calculateTime;


// In JavaScript, if a function doesn't have an explicit return statement, it implicitly returns undefined. This is a fundamental behavior of the language.

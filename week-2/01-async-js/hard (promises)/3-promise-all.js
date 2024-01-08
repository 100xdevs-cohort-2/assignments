/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    //Creating promise using the constructor
    return new Promise((resolve,reject)=>{
        //Using setTimeOut function to create delay
        setTimeout(()=>{
            //After the dalay is completed,the promised gets reoslved
            resolve("first promise is resolved");
        },t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second promise is resolved");
        },t*1000);
    })
}

function wait3(t) {
    return new Promise(()=>{
        setTimeout(() => {
            resolve("third promise is resolved");
        }, t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    //Record the start time of the complete operation
    const startTime = Date.now();
    const P1 = wait1(t1);
    const P2 = wait2(t2);
    const P3 = wait3(t3);
    //USing PRomise.all api to wait for all promise fulfilled.
    //It returns a promise containing the results of all 3 promises in the form array
    return Promise.all([P1,P2,P3]).then(()=>{
        const endTime = Date.now();
        const Diff = endTime-startTime
        return Diff
    })
}

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
function wait1(t) {
const prom1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve();
    }, t*1000);
}) 
return prom1;
}

function wait2(t) {
const prom2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },t*1000);
})
return prom2;
}

function wait3(t) {
 const prom3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },t*1000);
    
 }) 
 return prom3;
}

function calculateTime(t1, t2, t3) {
    const startime=Date.now();
const p1=wait1(t1);
const p2=wait2(t2);
const p3=wait3(t3);
const finalpromise=new Promise.all([p1,p2,p3]).then((result) => {
    const endtime=Date.now();
    const timetaken=endtime-startime;
    return timetaken;
}) 
return finalpromise;
}

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */



function wait1(t) {
   return new Promise (resolve => {
    setTimeout(() => {
         resolve("T1 done");
    }, t * 1000)
   })
}

function wait2(t) {
    return new Promise (resolve => {
        setTimeout(() => {
             resolve("T2 done");
        }, t * 1000)
       })
}

function wait3(t) {
    return new Promise (resolve => {
        setTimeout(() => {
             resolve("T3 done");
        }, t * 1000)
       })
}

function calculateTime(t1, t2, t3) {
       const startTime = Date.now();
       const promise1 = wait1(t1);
                promise1.then(message => {
                    console.log(message);
                });
       const promise2 = wait2(t2);
                promise2.then(message => {
                   console.log(message);
                });
       const promise3 = wait3(t3);

              promise3.then(message => {
               console.log(message);
               })

       return Promise.all([promise1, promise2, promise3])
       .then(() => {
            const endTime = Date.now();
            const totalTime = endTime - startTime;
            return totalTime;
       })
       
}

calculateTime(6, 4, 2)
.then((totalTime) => {
    console.log("Completed in ", totalTime);
})
.catch(error => {
    console.error(error);
})

module.exports = calculateTime;

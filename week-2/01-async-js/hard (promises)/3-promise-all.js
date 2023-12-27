/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


// CONCEPTS USED HERE :
    // 1. Promise.all is the function which helps to check whether the multiple promises has returned successfully or not 
    // 2. we will pass all the promises in the form of array
    // 3. even if a single promise fails to resolve or any of the promises mentioned in the array gets rejected then the promise.all will also get rejected with the reject error of first promise 
    // 4. in the following problem we will implement the same stuff for this purpose 


function wait1(t) {
    // returning the promise p1 
    let newPromise = new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve(Date.now());

        }, t*1000);
    });

    // say everything went fine 
    return newPromise;
}


function wait2(t) {
    // returning the promise p2 
    let newPromise = new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve(Date.now());
        }, t*1000);
    })

    // say everything went fine r
    return newPromise;
}


function wait3(t) {
    // returning promise p3 
    let newPromise = new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve(Date.now());
        }, t*1000);
    });

    // say everything went fine 
    return newPromise;
}


function calculateTime(t1, t2, t3) {
    // console.log("inside the calculatetime function \n");
    const startOfPromiseChaining = Date.now();
    let maxTime = Date.now();
    let returnPromise1 = wait1(t1);
    let returnPromise2 = wait2(t2);
    let returnPromise3 = wait3(t3);
    
    let returnPromise = Promise.all([returnPromise1, returnPromise2, returnPromise3])
    .then((resultArray) => {
        // we have to sum of the time at which they have resolved one by one 
        // now we have to check for the maximum time taken to resolve the promise 
        resultArray.forEach(currPromResolveTime => {
            if(currPromResolveTime > maxTime)
            {
                maxTime = currPromResolveTime;
            }
        });
        return (maxTime - startOfPromiseChaining);
    })
    .catch((error) => {
        // some error happened for this purpose 
        // do nothing for now 
    })

    // say everything went fine 
    return returnPromise;
}

// calculateTime(1, 2, 3);
module.exports = calculateTime;

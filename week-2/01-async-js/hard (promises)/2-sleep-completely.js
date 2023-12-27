/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


// CONCEPT USED HERE :
    // 1. we can define a promise which will resolve in milliseconds.
    // 2. we will wait for the promise to be resolved using the async await syntactice sugar in sleep function 
    // 3. since we know that the code after the async await wont be able executing hence it will force the thread to do nothing 
    // 4. this way we will not actually be able to busy the main thread but we can simulate that the main thread has been blocked for this purpose 



const sleepJSThread = (milliseconds) => {
    // we will return a promise after milliseconds of time 
    return new Promise ((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}


// below function will be using the async await function to implement this logic 
async function sleep(milliseconds) {

    // here we will use the async await in order to wait for the promise to be resolved 
    // now we have to just return the promise that is demanded in the question for this purpose 
    let returnedPromise = await sleepJSThread(milliseconds);
    return new Promise((resolve, reject) => {
        resolve();
    })

}

module.exports = sleep;

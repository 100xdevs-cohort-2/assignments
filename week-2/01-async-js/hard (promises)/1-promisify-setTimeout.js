/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// defining the function which will be returning the promise and it will resolve after n seconds  

function wait(n) {
    
    const promiseFunction = () => {
        return new Promise ((resolve, reject) => {
            // here we have to resolve the promise after n seconds 
            // using the settimeout function to set up a timer of n seconds 
            let timer = setTimeout(() => {
                // here we have to resolve  that means calling the callback function resolve for this purpose 
                resolve();
            }, n*1000);
        }) 
    }
    
    return promiseFunction();
    // now here we have to define the callback function 
    // const callback = () => {
    //     console.log("this is the callback function for this promise \n");
    //     console.log("the function is resolved\n");
    // }

    // // calling the asynchronous function for this purpose 
    // let returnedPromise = promiseFunction();
    // returnedPromise.then(callback);
}

module.exports = wait;

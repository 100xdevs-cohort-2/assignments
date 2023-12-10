/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve) => {        
        setTimeout(() => {resolve()},n);
    })
    return p;
}

wait(10000).then(() => console.log("Done"))
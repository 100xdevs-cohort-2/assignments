/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, n*1000);
    })
}

let beforeTime = new Date().getTime();
wait(2).then(()=> console.log(`${(new Date().getTime() - beforeTime) /1000} seconds happened`));

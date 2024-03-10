/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolves)=>{
        setTimeout(()=>{
            resolves(`Promise resolves after ${n} miliseconds`);
        },n)
    })
}

const res = wait(1000);
res.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

module.exports = wait;

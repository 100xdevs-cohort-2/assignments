/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let ans = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, n*1000);
    })
    return ans;
}

// wait(5).then((resolve)=>{
//     console.log(resolve);
// })

module.exports = wait;

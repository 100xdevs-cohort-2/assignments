/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    // let t1 = Date.now()
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            // let t2 = Date.now()
            resolve()
        }, n*1000)
    })
}

module.exports = wait;

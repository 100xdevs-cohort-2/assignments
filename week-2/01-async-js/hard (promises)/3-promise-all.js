/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        }, t*1000)
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        }, t*1000)
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        }, t*1000)
    })
}

async function calculateTime(t1, t2, t3) {
    const a = wait1(t1)
    const b = wait2(t2)
    const c = wait3(t3)

    const promisesArray = [a, b, c]

    const startTime = new Date().getTime()
    let endTime;

     await Promise.all(promisesArray).then(function(){
        
         endTime = new Date().getTime()

        
})
       return endTime - startTime
}

module.exports = calculateTime;

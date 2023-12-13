/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */



function wait1(t, startTime) {
    return p = new Promise(function(resolve){
        setTimeout(function(){
            d = new Date()
            resolve(d - startTime)
        }, t*1000)
    })
}

function wait2(t, startTime) {
    return p = new Promise(function(resolve){
        setTimeout(function(){
            d = new Date()
            resolve(d-startTime)
        }, t*1000)
    })
}

function wait3(t, startTime) {
    return p = new Promise(function(resolve){
        setTimeout(function(){
            d = new Date()
            resolve(d-startTime)
        }, t*1000)
    })
}

function calculateTime(t1, t2, t3) {
    startTime = new Date()
    p1 = wait1(t1, startTime)
    p2 = wait2(t2, startTime)
    p3 = wait3(t3, startTime)
    
    return Promise.all([p1, p2, p3]).then(function(results){
        // console.log(results[0])
        // console.log(results[1])
        // console.log(results[2])
        return Math.max(...results)
    })
    
}

calculateTime(10, 1, 1)

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    //console.log("Before")
    return wait1(t1, startTime).then(function(p1Time){
        timeTaken = 0;
        //console.log("Wait1 then")
        timeTaken = timeTaken + p1Time
        //console.log("wait 1: ", timeTaken)
        startTime = new Date()
        return wait2(t2, startTime)
    })
    .then(function(p2Time){
        //console.log("Wait2 then")
        timeTaken = timeTaken + p2Time
        //console.log("wait 2: ", timeTaken)
        startTime = new Date()
        return wait3(t3, startTime)
    })
    .then(function(p3Time){
        //console.log("Wait3 then")
        timeTaken = timeTaken + p3Time
        //console.log("wait 3: ", timeTaken)
        //console.log(typeof(timeTaken))
        return timeTaken
    })
    
}


module.exports = calculateTime;

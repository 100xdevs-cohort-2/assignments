/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise(function(resolve){
    setTimeout(function(){
        resolve(t)
    },t*1000)
  })
}

function wait2(t) {
   return new Promise(function(resolve){
    setTimeout(function(){
        resolve(t)
    },t*1000)
   })
} 

function wait3(t) {
  return new Promise(function(resolve){
    setTimeout(function(){
        resolve(t)
    },t*1000)
  })
}

function calculateTime(t1, t2, t3) {
  const start = Date.now()
  return wait1(t1).then(function(res){
    console.log(res)
    return wait2(t2)
  }).then(function (res2){
    console.log(res2)
    return wait3(t3)
  }).then(function(res3){
    console.log(res3)
    const end = Date.now()
    return end - start
  })
}
calculateTime(1,2,3).then(function(res){
  console.log(res)
})

module.exports = calculateTime;

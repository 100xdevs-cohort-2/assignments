/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise(function(resolve) {
    setTimeout(function(){resolve("waitOneSecond")}, 1000);
  })
}

function waitTwoSecond() {
  return new Promise(function(resolve) {
    setTimeout(function(){resolve("waitTwoSecond")}, 2000);
  })
}

function waitThreeSecond() {
  return new Promise(function(resolve) {
    setTimeout(function(){resolve("waitThreeSecond")}, 3000);
  })
}

function calculateTime() {
  let start = Date.now();
  waitOneSecond().then(function (value1){
    console.log(value1);
    waitTwoSecond().then(function (value2) {
      console.log(value2);
      waitThreeSecond().then(function (value3) {
        console.log(value3);
        let end = Date.now();
        console.log("Time taken = " + (end-start)/1000 + " seconds");
      }, function (error3){});
    }, function (error2){});
  }, function (error1){})
}

calculateTime();
function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitOneSecond() {
  return new Promise(function(resolve) {
    setTimeout(function(){resolve("waitOneSecond")}, 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function(resolve) {
    setTimeout(function(){resolve("waitTwoSecond")}, 2000);
  });
}
  
function waitThreeSecond() {
  return new Promise(function(resolve) {
    setTimeout(function(){resolve("waitThreeSecond")}, 1000);
  });
}

function calculateTime() {
  start = Date.now();
  p1 = waitOneSecond();
  p2 = waitTwoSecond();
  p3 = waitThreeSecond();
  Promise.all([p1, p2, p3]).then(function(values) {
    console.log("Values = " + values);
    end = Date.now();
    console.log("Time Taken = " + (end-start)/1000 + "seconds");
  });
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

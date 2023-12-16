/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
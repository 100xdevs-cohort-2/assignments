/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(`Resolved after 1 second`);
        }, 1000);
    });
}
  
function waitTwoSecond() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(`Resolved after 2 second`);
        }, 2000);
    });
}
  
function waitThreeSecond() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(`Resolved after 3 second`);
        }, 3000);
    });
}
  
function calculateTime() {
    let time = Date.now();
    waitOneSecond().then(function(data) {
      console.log(data);
      console.log(`Time taken to resolve oneSecond: ${parseInt((Date.now() - time)/1000)} ms`);
      time = Date.now();
      return waitTwoSecond();
    }).then(function(data) {
      console.log(data);
      console.log(`Time taken to resolve twoSecond: ${parseInt((Date.now() - time)/1000)} ms`);
      time = Date.now();
      return waitThreeSecond();
    }).then(function(data) {
      console.log(data);
      console.log(`Time taken to resolve threeSecond: ${parseInt((Date.now() - time)/1000)} ms`);
    }).catch(function(error) {
      console.log("One of the promise reject");
    })
}
  
calculateTime();

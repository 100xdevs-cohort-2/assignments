/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
    let myPromise = Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
  
    myPromise.then(function(values) {
      console.log(values);
      console.log(`Total time taken: ${parseInt((Date.now() - time)/1000)} ms`);
    }).catch(function(error) {
      console.log("One of the promises is rejected");
    })
}
  
calculateTime();

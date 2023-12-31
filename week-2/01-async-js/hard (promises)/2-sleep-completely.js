/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    

  let start = new Date().getTime();
  let end = start + milliseconds;
   
/*   for(let iter = start; iter <= end; iter++) {
 This does not work because iter will not increase at the rate of a millisecond.
   }*/

   //this works because, we are making the iter progress with the rate of a millisecond
   for(let iter = start; iter <=end; iter = new Date().getTime()) {

   }

  return new Promise(function(resolve, reject) {    
    resolve();

  })
}

module.exports = sleep;

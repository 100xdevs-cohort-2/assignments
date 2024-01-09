/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// function sleep(seconds) {
//   const start = new Date().getTime();
//   while (new Date().getTime() - start < (seconds * 1000)) {

//   }
//   console.log(`waited ${seconds} seconds`)
// }

function work() {
  sleep(5000)
  console.log("hello");
}
work()
module.exports = sleep;

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const targetDate = new Date().setMilliseconds(
    new Date().getMilliseconds() + milliseconds
  );
  let time = new Date();
  let timer = targetDate - time.getTime();
  while (timer > 0) {
    time = new Date();
    timer = targetDate - time.getTime();
  }
}

console.log("before timer");
sleep(5000);
console.log("after timer");

module.exports = sleep;

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const targetDate = new Date().setSeconds(new Date().getSeconds() + seconds);
  let time = new Date();
  let timer = targetDate - time.getTime();
  while (timer > 0) {
    time = new Date();
    timer = targetDate - time.getTime();
  }
}

console.log("before timer");
sleep(5);
console.log("after timer");

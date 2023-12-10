/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let start = Date.now();
  while (Date.now() < start + seconds * 1000) {
    // do nothing
  }
}

console.log("start", Date.now());
sleep(5);
console.log("end", Date.now());

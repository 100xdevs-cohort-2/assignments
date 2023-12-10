/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();

  let current;

  do {
    current = Date.now();
  } while (current - start < seconds);
}

console.log("Start");
sleep(4000);
console.log("End");

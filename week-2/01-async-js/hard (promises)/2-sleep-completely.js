/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function wait(n) {
  return new Promise((resolve) => setTimeout(resolve, n * 1000));
}

function sleep(seconds) {
  let flag = true;
  wait(seconds).then(() => {
    flag = false;
    console.log("Woke up after " + seconds + " seconds");
  });
  console.log("Sleeping for " + seconds + " seconds");
  while (flag) {}
}

console.log("Start");
sleep(1);
console.log("End");

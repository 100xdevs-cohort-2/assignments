/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise((r) => setTimeout(r, seconds * 1000));
}
console.log("thread between");

sleep(5).then(() => {
  console.log("thread release");
});

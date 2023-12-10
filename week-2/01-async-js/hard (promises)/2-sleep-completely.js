/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

//Does not block the thread
function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}
function busyWait(seconds) {

}
async function work() {
  console.log("hello");
  for (let i = 0; i < 5; i++) {
    console.log(i)
    await sleep(2)
  }
}
work()
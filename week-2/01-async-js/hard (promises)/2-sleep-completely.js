/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

//Does not block the thread
function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}
function busyWait(seconds) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < (seconds * 1000)) {

  }
  console.log(`waited ${seconds} seconds`)
}
async function work(seconds) {
  busyWait(seconds)
  for (let i = 0; i < 5; i++) {
    console.log(i)
    await sleep(seconds)
  }
  console.log("hello");
}
work(3)

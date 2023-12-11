/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const {wait}=require('./1-promisify-setTimeout')
async function sleep (seconds) {
    console.log('before waiting')
    await wait(seconds);
    console.log("after waiting")
}
// sleep(1000)
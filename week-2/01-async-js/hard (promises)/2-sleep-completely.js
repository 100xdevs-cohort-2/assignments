/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(sec) {
    await sleep(sec * 1000);
    console.log("run after ms second");
}

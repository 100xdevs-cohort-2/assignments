/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    const current = Date.now()
    const required = current + seconds * 1000

    while (Date.now() <= required) {

    }

}

console.time('sleep')
sleep(1)
console.timeEnd('sleep')

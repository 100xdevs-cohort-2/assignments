/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep (seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds);
    });
}

async function main() {
    console.log("Before thread goes into halt")

    await sleep(5000)

    console.log("Halt Finished")
}

main()

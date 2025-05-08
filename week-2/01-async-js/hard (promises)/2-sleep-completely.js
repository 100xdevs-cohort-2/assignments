/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    return new Promise((resolve) =>{
        // setTimeout(resolve, milliseconds);
        // console.log('After resolve');

        const start = Date.now();
        while(Date.now() - start < milliseconds){
            continue;
        }
        resolve();
    })
} 

async function main(n){
    console.log('Before Sleep');
    await sleep(n);
    console.log(`After Sleep for ${n} milliseconds`);

}

main(2000);
module.exports = sleep;

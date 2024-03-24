<<<<<<< HEAD
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const p = new Promise(function (resolve) {
        setTimeout(function () {
        resolve();
        }, milliseconds);
    });

    return p;
}

//const ans = sleep(3000);

async function main(){
    let p = await sleep(3000);
    console.log(p);
}

main();

module.exports = sleep;
||||||| empty tree
=======
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
}

module.exports = sleep;
>>>>>>> a3fa79c5a8030e58d055c1b728d3df963fe878fd

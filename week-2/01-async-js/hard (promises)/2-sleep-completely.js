/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const p =  new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, milliseconds);
    });
    return p;
}

async function main() {
    let sum = 0;
    for (let i = 0; i < 100000000; i++){
        sum += i;
    }
    await sleep();
}

main ();

module.exports = sleep;

//Better code:
/*
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const main = async () => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    await sleep();
};

main();
module.exports = sleep;
*/
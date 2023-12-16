/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const startTime = Date.now();
    while(true){
        if((Date.now() - startTime) >= milliseconds){
            break;
        }
    }
    return new Promise((resolve) =>{
        setTimeout(resolve, 0 );
    });
}
// sleep(3000).then((data)=>{
//     console.log(data);
// });

module.exports = sleep;

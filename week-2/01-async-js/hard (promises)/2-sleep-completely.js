/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function promiseval(n){
    let p = new Promise(function(resolve , reject){
        setTimeout(function(){
                resolve();
        } , n + 10);
    })
    return p;
}
async function sleep(milliseconds){
    let ans = await promiseval(milliseconds);
    return ans;
}
// function sleep(milliseconds) {
//     let val = solve(milliseconds);
//     return val;
// }

module.exports = sleep;

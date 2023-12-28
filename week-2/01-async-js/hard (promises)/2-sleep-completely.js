/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
/*
function sleep (seconds) {
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(seconds +" seconds passed.");
    }, seconds*1000);
  });
}

async function main(seconds) {
  console.log("Before await call");
  const value = await sleep(seconds);
  // halts the thread here for 'seconds' seconds
  console.log("After await call");
  console.log("Resolve value: " + value);
}

console.log("Before fn call");
main(5);
console.log("After fn call");
*/

function sleep(milliseconds) {
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve();
    }, milliseconds);
  });
}

module.exports = sleep;

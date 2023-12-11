/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res();
      }, seconds);
   });
}

// async function sleepFor(seconds) {
//    const data = await sleep(seconds * 1000);
//    console.log(data);
// }

module.exports = sleep;

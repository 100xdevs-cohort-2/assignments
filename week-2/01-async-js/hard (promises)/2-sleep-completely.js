/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// async function sleep(milliseconds) 
// {
//     let p = await new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve()},milliseconds);
//     })
//     return p; 
// }

// module.exports = sleep;

function sleep(milliseconds) 
{
    const startTime = new Date().getTime();
  while (new Date().getTime() - startTime < milliseconds) 
  {}
  return new Promise((resolve)=>{resolve()});
}

module.exports = sleep;
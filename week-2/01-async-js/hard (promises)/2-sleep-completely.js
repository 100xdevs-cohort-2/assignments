/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
function wait(milliseconds) {
    return new Promise(function (resolve) {
      setTimeout(function(){resolve("Hello now!!!1");}, milliseconds);
    });
  }
  
  
  async function sleep(milliseconds) {
    return await wait(milliseconds);
  }
  
  console.log("before");
  console.log(sleep(5000).then(function(value){
    console.log(value);
  }));
  console.log("after");
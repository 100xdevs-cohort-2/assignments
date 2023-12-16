/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(seconds) {
    let time = Date.now();
    let now = Date.now();
  
    console.log(`sleeping for ${seconds}`);
  
    // do {
    //   now = Date.now();
    // } while((now - time) <= seconds * 1000);
  
    while((now - time) <= seconds * 1000) {
      now = Date.now();
    }
  
    console.log("resumed");
}
  
  
sleep(5);

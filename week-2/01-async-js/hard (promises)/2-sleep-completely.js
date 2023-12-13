/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const fs = require("fs");

function sleep(seconds) {
  var start = Date.now();

  //Blocking I/O request
  while (Date.now() - start < seconds * 1000) {
    //busy-waiting
  }
}

//Timer in seconds since since midnight January 1, 1970
console.log(`Start thread freez time (s): `, Math.floor(Date.now() / 1000));
sleep(5);
console.log(`End thread freeze time (s): `, Math.floor(Date.now() / 1000));

//Freezes the JS thread synchronously | Also called blocking I/O operation.

//Instantiating the Date() class might not help as this is a timer and it goes into an infinite loop

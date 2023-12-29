/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
<<<<<<< HEAD
  const start = new Date().getTime();
  console.log('I am in Sleep mode');
  while (new Date().getTime() - start < milliseconds) {
  
  }
  console.log("I am awake now!");
}

sleep(6000);
=======
}

module.exports = sleep;
>>>>>>> origin/master

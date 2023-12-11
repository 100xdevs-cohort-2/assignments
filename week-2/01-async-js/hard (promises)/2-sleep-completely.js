/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleepify(seconds) {
  console.log('Sleepify Constructed');
  while (true) {
    let condition = true;
    function cb() {
      condition = false;
    }
    if (!condition) {
      break;
    }
    Promise.resolve(undefined).then(cb);
    console.log('Sleepify Running');
  }
}

function sleep(seconds) {
  console.log('Sleepify Started');
  sleepify(seconds);
  console.log('Sleepify Resolved');
  console.log('Someother Work To be Done!!');
}

sleep(1);

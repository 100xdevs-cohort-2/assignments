/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// ** AS PER DESCRIPTION

function sleepifyORIGINAL(seconds) {
  console.log('Sleepify Constructed');
  const ms = seconds * 1000 + new Date().getTime();
  while (new Date() < ms) {
    console.log('Sleepify Running');
  }
}

// ** AS PER TESTs

function sleepifyNew(seconds) {
  console.log('Sleepify Constructed');
  return new Promise((resolve) => {
    const ms = seconds + new Date().getTime();
    while (new Date() < ms) {
      console.log('Sleepify Running');
    }
    resolve();
  });
}

//----------------

function sleep(seconds) {
  // console.log('Sleepify Started');
  return sleepifyNew(seconds);
  // console.log('Sleepify Resolved');
  // console.log('Someother Work To be Done!!');
}

module.exports = sleep;

// INFO: this can also be done using async and await but i didn't prefered,
// at first. so, looked for setTimeout/Promise.resolve with closures then into date. I didnt looked into online references before brainstorming and deciding to use Date comparison.

/**
 * REF:
 * [javascriptdelay](https://www.sean.co.uk/a/webdesign/javascriptdelay.shtm)
 * [JS Version of Sleep](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep)
 */


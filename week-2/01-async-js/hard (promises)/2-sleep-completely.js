/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds);
  });
}

async function sleepForMs(ms) {
  const time = new Date().getTime();

  console.log(`Js thread starting executing::: current time::: ${time}`);
  await sleep(ms);

  const afterSleep = new Date().getTime();

  console.log(
    `Js thread resume it's work after sleeping for ${ms}, current time::: ${afterSleep}`
  );
}

sleepForMs(5000);

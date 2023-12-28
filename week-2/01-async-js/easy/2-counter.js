function waitOneSecond(count) {
  if (count == null) {
    count = 0;
  }
  let wait = new Promise(function (resolve) {
    setTimeout(() => {
      resolve(count + 1);
    }, 1000);
  });
  return wait;
}

async function printCount(c) {
  for (let i = 0; i < c; i++) {
    console.log(await waitOneSecond(i));
  }
}

printCount(10);

// module.exports = waitOneSecond;

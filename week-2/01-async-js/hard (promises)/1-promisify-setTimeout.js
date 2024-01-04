/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status == "OK") resolve("Resolved in " + n / 1000 + " seconds");
      else reject("Operation FAILED");
    }, n);
  });
}

async function callWait() {
  try {
    let msg = await wait(2000, "OK");
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}

console.log("called callWait");
callWait();
console.log("after calling callWait");

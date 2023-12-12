/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("true");
    }, n);
  });
}

async function consumePromise() {
  try {
    const res = await wait(5000);
    if (res) {
      console.log(res);
    }
  } catch (error) {
    throw new Error(error);
  }
}

consumePromise();

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("I am returning from the function");
      }, n);
    } catch (error) {
      reject(error);
    }
  });
}

async function main(n) {
  try {
    const result = await wait(n); // 1000 milliseconds (1 second) as an example
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
}

main(1000);


module.exports = wait;

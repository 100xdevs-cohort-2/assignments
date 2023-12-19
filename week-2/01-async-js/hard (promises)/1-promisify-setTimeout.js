/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const prom = new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        // console.log("done here");
      }
      ,n*1000)
    }
    )

    return prom
}

wait(2000)

module.exports = wait;

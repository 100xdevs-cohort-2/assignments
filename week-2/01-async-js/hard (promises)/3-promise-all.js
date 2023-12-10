/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(()=>{
     resolve("Done waitOneSecond");
    },1000)
  })
}

function waitTwoSecond() {
    return new Promise(function (resolve) {
        setTimeout(()=>{
            resolve("Done waitTwoSecond");
        },2000)
      })
}

function waitThreeSecond() {
    return new Promise(function (resolve) {
        setTimeout(()=>{
            resolve("Done waitThreeSecond");
        },3000)
      })
}

function calculateTime() {
    const startTime = Date.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
      .then((results) => {
        const endTime = Date.now();
        const duration = (endTime - startTime)/1000;
        console.log("All promises resolved in", duration, "seconds");
        console.log("Results:", results);
      })
     
  }
  
  calculateTime();
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

<<<<<<< HEAD

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
=======
function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;
>>>>>>> origin/master

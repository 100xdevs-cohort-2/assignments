/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
}
let bef = Date.now();

function calculateTime(t1,t2,t3) {
  Promise.all([wait(t1), wait(t2), wait(t3)]).then(() => {
    let timetaken = Date.now() - bef;
    console.log(timetaken);
  });
}
calculateTime(10,1,1);

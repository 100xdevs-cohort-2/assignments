/*
 Check the time difference between the setTimeout() function and the inner function actually running.

*/

let timerId;

function delayByFiveSecond() {
  let start = new Date();
  console.log("Start : ", start);
  timerId = setTimeout(() => {
    let end = new Date();
    console.log("End : ", end);
    console.log("Difference b/w : ", end - start);
  }, 5 * 1000);
}

delayByFiveSecond();

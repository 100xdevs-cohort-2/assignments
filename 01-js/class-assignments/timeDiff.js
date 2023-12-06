/*
 Check the time difference between the setTimeout() function and the inner function actually running.

*/

let timerId;

function timeDifference() {
  let start = new Date();
  console.log("Start : ", start);
  timerId = setTimeout(() => {
    let end = new Date();
    console.log("End : ", end);
    console.log("Difference b/w : ", end - start);
  }, 1 * 1000);
}

timeDifference();

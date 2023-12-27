/*
  Create a counter in javascript that count down from a number `N` to `0`
        - This program prints number from N to 0 at 1 sec interval for each value.
*/

let timerId;

function countDownTime(num, delay = 1000) {
  timerId = setInterval(() => {
    if (num < 0) {
      console.log("The end ... ");
      clearInterval(timerId);
    } else {
      console.log(num--);
    }
  }, delay);
}

countDownTime(5);

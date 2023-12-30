// Create a counter in Javascript (counts down from 30 to 0)

let count = 30;

const countdownInterval = setInterval(() => {
  if (count >= 0) {
    console.log(count);
    count--;
  } else {
    console.log("Countdown complete!");
    clearInterval(countdownInterval);
  }
}, 1000);

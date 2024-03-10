// Create a counter in Javascript (counts down from 30 to 0)

const timerFunction = () => {
  const myInterval = setInterval(() => {
    const timer = document.getElementById("timer");

    timer.textContent = Number(timer.textContent) - 1;
    if (timer.textContent == 0) {
      clearInterval(myInterval);
    }
    console.log("hi", timer.textContent);
  }, 1000);
};
document.getElementById("timer-btn").addEventListener("click", timerFunction);

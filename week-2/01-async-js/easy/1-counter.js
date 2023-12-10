let intervId
let count = 1;
function counter(seconds) {
  intervId = setInterval(() => {
    if (count === seconds) {
      clearInterval(intervId)
      intervId = null
    }
    console.log(count);
    count++;
  }, 1000)
}
counter(3)
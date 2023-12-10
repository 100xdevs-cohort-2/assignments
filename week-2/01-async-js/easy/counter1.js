function counter(start, end) {
  let intervalId = setInterval(() => {
    console.log(start);
    start++;
    if (start > end) {
      clearInterval(intervalId);
    }
  }, 1000);
}
counter(0, 10);

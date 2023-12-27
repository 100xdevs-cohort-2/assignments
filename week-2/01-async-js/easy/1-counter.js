function counter(n) {
  let count = 0;
  const timerID = setInterval(() => {
    console.log(count);
    if (count === n) {
      clearInterval(timerID);
    }
    count += 1;
  }, 1000);
}

counter(10);

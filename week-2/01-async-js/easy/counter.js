let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(count);
  if (count > 30) {
    clearInterval(interval);
  }
}, 1000);

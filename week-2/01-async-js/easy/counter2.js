function logCount(start) {
  console.log(start);
}
function counterHelper(start) {
  return new Promise((resolve) => {
    setTimeout(() => {
      logCount(start);
      resolve();
    }, 1000);
  });
}
async function counter(start, end) {
  while (start <= end) {
    await counterHelper(start);
    start++;
  }
}
counter(0, 10);

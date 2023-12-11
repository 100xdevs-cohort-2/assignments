function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}
async function counterWithoutSetInterval(start) {
  await delay();
  console.log(start++);
  counterWithoutSetInterval(start);
}

counterWithoutSetInterval(0);

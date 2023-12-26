let counter = 0;

async function increaseCounter() {
  counter++;
  console.log({ counter });
}

function startCounter() {
  increaseCounter();
  setTimeout(() => startCounter(), 1000);
}

startCounter();

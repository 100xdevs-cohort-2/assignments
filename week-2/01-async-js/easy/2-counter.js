let counter = 0;

async function increment() {
  let value = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(counter++);
    }, 1000);
  });
    return value;
}

async function runIncrement() {
  while(true) {
    await increment();
    console.log(counter);
  }
}

runIncrement();
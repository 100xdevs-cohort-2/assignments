function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

async function updateCounter(counter) {
  await delay();
  console.log(counter++);
  updateCounter(counter);
}

updateCounter(0);
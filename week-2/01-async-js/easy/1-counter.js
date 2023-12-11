function updateCounter() {
  let counter = 0;
  setInterval(() => {
    console.log(counter++);
  }, 1000);
}

updateCounter();
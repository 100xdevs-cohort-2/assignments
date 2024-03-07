function updateCounter(counter) {
  counter++;

  console.log(counter);

  setTimeout(() => {
    updateCounter(counter);
  }, 1000);
}

updateCounter(0);

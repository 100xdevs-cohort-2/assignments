function startCounter(counter = 0, duration = 3600) {
  setTimeout(() => {
    if (counter <= duration) {
      console.clear();
      console.log(counter);
      startCounter(counter + 1);
    }
  }, 1000);
}

startCounter();

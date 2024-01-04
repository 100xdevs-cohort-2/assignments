function counterWithoutSetInterval() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      console.clear();
      console.log(i);
    }, i * 1000);
  }
}

counterWithoutSetInterval();

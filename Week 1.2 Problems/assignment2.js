function measureTime() {
  const startTime = new Date();

  setTimeout(function () {
    const endTime = new Date();
    const elapsedTime = endTime - startTime;

    console.log(`Time elapsed: ${elapsedTime} milliseconds`);
  }, 1000);
}

measureTime();

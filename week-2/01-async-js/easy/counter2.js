function startCounter(count) {
    if (count > 100) {
      console.log("Countdown complete!");
      return;
    }
    console.log(count);
    setTimeout(function () {
      startCounter(count + 1, 1000);
    },1000);
  }

  startCounter(0);
  
function counter() {
  let seconds = 0;

  setInterval(function () {
    seconds = seconds + 1;
    console.log(seconds);
  }, 1000);
}

counter();

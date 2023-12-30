function counter() {
  counter = 0;
  setInterval(function () {
    counter += 1;
    console.log(counter);
  }, 1000);
}
counter();

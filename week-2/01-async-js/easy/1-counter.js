function counter() {
  count = 0;
  setInterval(function () {
    console.clear();
    console.log(count++);
  }, 1000);
}

counter();

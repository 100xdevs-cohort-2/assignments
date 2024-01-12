function countUp(counter) {
  console.log(counter);

  setTimeout(function () {
    countUp(counter + 1);
  }, 1000);
}

countUp(1);

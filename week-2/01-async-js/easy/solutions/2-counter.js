let counter = 0;
function counterWithoutSetInterval() {
  setTimeout(() => {
    counter++;
    console.log(counter);

    counterWithoutSetInterval();
  }, 1000);
}
counterWithoutSetInterval();

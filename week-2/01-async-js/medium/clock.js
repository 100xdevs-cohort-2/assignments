function updateCounter(counter) {
  function currtime() {
    let currentDate = new Date();
    console.log(currentDate);
  }
  currtime();
  setTimeout(() => {
    updateCounter(counter);
  }, 1000);
}

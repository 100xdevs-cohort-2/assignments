function clock() {
  setInterval(function () {
    console.log(new Date().toLocaleTimeString());
  }, 1000);
}

clock();

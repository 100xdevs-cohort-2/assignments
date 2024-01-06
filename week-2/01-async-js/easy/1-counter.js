let a = 0;
function wrapper() {
  setInterval(function () {
    console.log(a++);
  }, 1000);
}
wrapper();

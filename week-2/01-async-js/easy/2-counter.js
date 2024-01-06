let a = 0;
function wrapper() {
  setTimeout(function () {
    console.log(a++);
    wrapper();
  }, 1000);
}
wrapper();

let a = 0;

function startCounter() {
  a++;
  setTimeout(function () {
    console.log(a);
    startCounter();
  }, 1000);
}

startCounter();

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let ctr = 0;
function counter() {
  let seti = setInterval(() => {
    ctr++;
  }, 1000);
  setTimeout(function () {
    clearInterval(seti);
  }, 5000);
}
counter();

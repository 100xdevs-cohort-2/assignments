let i = 0;

function fn() {
  console.log(i++);
  setTimeout(fn, 1000);
}
fn();

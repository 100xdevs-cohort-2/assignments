let n = 0;
function counter() {
  console.log(n++);
  setTimeout(counter, 1000);
}

counter();

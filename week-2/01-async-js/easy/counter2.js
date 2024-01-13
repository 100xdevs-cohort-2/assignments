let count = 0;
function counter() {
  console.log("Count:", count++);
  setTimeout(() => {
    counter();
  }, 1000);
}

counter();

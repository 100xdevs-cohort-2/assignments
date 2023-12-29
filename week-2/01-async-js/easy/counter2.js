let count = 0;

function counter() {
  setTimeout(() => {
    count++;
    console.log(count);
    counter();
  }, 1000);
}

counter();

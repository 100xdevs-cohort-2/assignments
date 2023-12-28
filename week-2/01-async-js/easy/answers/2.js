let count = 0;

function incrementCount() {
  count++;
  console.log(count);
  setTimeout(() => {
    incrementCount();
  }, 1000);
}

incrementCount();

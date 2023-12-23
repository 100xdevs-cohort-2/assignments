let counter = 0;

function Counter() {
  setTimeout(() => {
    console.log(counter);
    counter++;
    Counter();
  }, 1000);
}

Counter();

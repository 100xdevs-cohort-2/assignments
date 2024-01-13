let counter = 0;

function counterF() {
  setTimeout(() => {
    console.log(counter);
    counter++;
    counterF();
  }, 1000);
}

counterF();

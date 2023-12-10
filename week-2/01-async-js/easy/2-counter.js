var counter = 1;

function counterFunc() {
  console.clear();
  console.log(counter++);

  setTimeout(() => {
    counterFunc();
  }, 1000);
}

counterFunc();

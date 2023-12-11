const count = 1;

function counter(count) {
  setInterval(() => {
    console.log(count++)
  }, 1000);
}

counter(count);

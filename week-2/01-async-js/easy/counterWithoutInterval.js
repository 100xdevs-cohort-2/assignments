let count = 0;

const timer = () => {
  setTimeout(() => {
    count++;
    console.log(count);
    count < 30 && timer();
  }, 1000);
};

timer();

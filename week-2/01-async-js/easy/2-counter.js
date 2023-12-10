const counter = () => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      i++;
      console.log(i);
    }, i * 1000);
  }
};

counter();

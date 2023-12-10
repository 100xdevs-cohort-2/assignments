let count = 0;
const timer = () => {
  count += 1;
  console.log(`count: ${count}`);
};

setInterval(timer, 1000);

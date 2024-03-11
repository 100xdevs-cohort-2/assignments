let initialCount = 0;
const timer = () => {
  console.log(`timer: ${initialCount}`);
  initialCount++;
  setTimeout(timer, 1000);
};
timer()
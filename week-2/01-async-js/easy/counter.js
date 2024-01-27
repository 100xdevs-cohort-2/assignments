const counter = () => {
  let time = 0;
  const incrementTime = setInterval(() => {
    time++;
  }, 1000);
  const showTime = setInterval(() => {
    console.log(time);
  }, 1000);
  return {
    getTime: () => null,
    stop: () => {
      clearInterval(incrementTime);
      clearInterval(showTime);
    },
  };
};
const myCounter = counter();
setInterval(() => {
  myCounter.getTime(), 1000;
});

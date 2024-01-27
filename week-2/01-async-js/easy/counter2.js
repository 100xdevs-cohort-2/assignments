let time = 0;
const counter = () => {
  let active = true;
  console.log('🚀 ~ counter ~ time:', time);
  time++;
  if (active) setTimeout(counter, 1000);
};
counter();

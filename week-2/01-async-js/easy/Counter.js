// Counter using set interval;
let counter = 0;
const runCounter = () => {
  setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);
};

let counter2 = 0;
const updateCounter = () => {
  counter2++;
  console.log(counter2);
  setTimeout(updateCounter, 1000);
};

runCounter();

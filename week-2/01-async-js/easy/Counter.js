// Counter using set interval;
let counter = 0;
const runCounter = () => {
  setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);
};
runCounter();

// Counter using setTimeout
let counter2 = 0;
const runCounter2 = () => {
  counter2++;
  console.log(counter2);
  setTimeout(runCounter2, 1000);
};

runCounter2();

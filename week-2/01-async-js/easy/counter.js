let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(counter);

  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 1000);

let anotherCounter = 0;
const incrementCounter = () => {
  console.log(anotherCounter++);
  if (anotherCounter < 5) {
    setTimeout(incrementCounter, 1000);
  }
};

incrementCounter();

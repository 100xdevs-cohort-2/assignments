


let counter = 0;

updateCounter = () => {
  counter++;
  console.log("Counter : " + counter);

  setTimeout(updateCounter, 1000);
};

updateCounter();


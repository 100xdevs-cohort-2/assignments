let counterValue = 0;


function updateCounter() {

  counterValue++;

  console.log(`Counter: ${counterValue}`);
}

const intervalId = setInterval(updateCounter, 1000);

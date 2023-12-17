let currTimer = new Date().getTime();

function updateCounter() {
  currTimer = currTimer + 1;
  console.log(currTimer);
  setTimeout(updateCounter, 1000);
}

updateCounter();

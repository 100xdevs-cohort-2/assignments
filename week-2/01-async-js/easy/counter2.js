function displayTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  console.clear();
  console.log(`${hours}:${minutes}:${seconds}`);

  setTimeout(displayTime, 1000);
}

displayTime();

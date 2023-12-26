function clock() {
  let currentDate = new Date();
  let localTime = currentDate.toLocaleTimeString();
  console.log(localTime);
  setTimeout(clock, 1000);
}

clock();

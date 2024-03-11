function startClock() {
  let time = +new Date();

  setInterval(() => {
    time += 1000;
    console.log({ currTime: new Date(time).toUTCString() });
  }, 1000);
}

startClock();

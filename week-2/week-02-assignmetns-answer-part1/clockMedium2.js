function clock(sec, min, hour) {
  console.log(hour + ":" + min + ":" + sec);
  if (sec === 59) {
    sec = 0;
    min += 1
  }
  setTimeout(function () {
    clock(sec + 1, min, hour);
  }, 1000);
}

// setInterval(clock, 10000);
let time = new Date();
let sec = time.getSeconds();

let min = time.getMinutes();
let hour = time.getHours();
clock(sec, min, hour);

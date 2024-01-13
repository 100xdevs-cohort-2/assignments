const counter = require("../easy/counter2.js");

async function clock12() {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ampm = "";
  while (1) {
    while (m < 60) {
      while (s < 60) {
        ampm = h > 12 ? "PM" : "AM";
        await counter().then(() => {
          console.log(`12 hour format : ${h % 12}:${m}::${s++} ${ampm}`);
        });
      }
      s = 0;
      m++;
    }
    m = 0;
    h++;
  }
}

clock12();

async function clock24() {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  while (1) {
    while (m < 60) {
      while (s < 60) {
        await counter().then(() => {
          console.log(`24 hour format : ${h}:${m}::${s++}`);
        });
      }
      s = 0;
      m++;
    }
    m = 0;
    h++;
    if (h > 24) {
      h = 0;
    }
  }
}

//clock24();

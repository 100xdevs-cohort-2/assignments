function clock() {
  setInterval(() => {
    // get current hour, min, sec
    let hour = String(new Date().getHours());
    let min = String(new Date().getMinutes());
    let sec = String(new Date().getSeconds());
    if (sec.length < 2) sec = "0" + sec;
    if (min.length < 2) min = "0" + min;
    if (hour.length < 2) hour = "0" + hour;
    console.clear();
    console.log(hour + ":" + min + ":" + sec);
  }, 1000);
}

clock();

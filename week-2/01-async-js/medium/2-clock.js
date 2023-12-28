const clock = () => {
  setInterval(() => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let amPM = hours >= 12 ? "PM" : "AM";
    console.log(hours + ":" + minutes + ":" + seconds + " " + amPM);
  }, 1000);
};
clock();

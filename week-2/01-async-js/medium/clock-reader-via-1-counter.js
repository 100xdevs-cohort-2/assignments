function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = (hours>=12)? "PM" : "AM";

  console.log(hours + ":" + minutes + ":" + seconds + " " + meridian);
  
}

setInterval(updateTime, 1000);
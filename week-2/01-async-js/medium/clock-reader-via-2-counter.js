function updateTime(str) {
  
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = (hours>=12)? "PM" : "AM";

    str = hours + ":" + minutes + ":" + seconds + " " + meridian;

    console.log(str);

    setTimeout(function() {
        updateTime(str);
    }, 1000);
}
  
  
updateTime("");
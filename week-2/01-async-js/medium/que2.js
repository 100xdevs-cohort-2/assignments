function dispalytime() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  console.log(hrs + ":" + mins + ":" + secs);
}

setInterval(dispalytime, 1000);

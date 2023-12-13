function dispalytime() {
  let date = new Date();
  console.log(date.getSeconds());
}

setInterval(dispalytime, 1000);

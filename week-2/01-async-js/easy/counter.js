setInterval(() => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  console.clear();
  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);

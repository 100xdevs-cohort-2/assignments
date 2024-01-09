let date = new Date();

function clock() {
  const now1 = date.toTimeString().substring(0, 8);
  const now2 = date.toLocaleTimeString();
  console.log(now1 + '  ' + now2);
}
setInterval(clock, 1000);

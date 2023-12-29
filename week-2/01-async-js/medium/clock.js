// setInterval(() => {
//   let now = new Date();

//   let hours = String(now.getHours()).padStart(2, "0");
//   let minutes = String(now.getMinutes()).padStart(2, "0");
//   let seconds = String(now.getSeconds()).padStart(2, "0");

//   console.clear();
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

setInterval(() => {
  let now = new Date();
  let timeString = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.clear();
  console.log(timeString);
}, 1000);

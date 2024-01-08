let count = 0;

let counter = setInterval(() => {
  count++;
  const date = new Date();
  let hours12 = new String(
    date.getHours() <= 12 ? date.getHours() : 24 - date.getHours()
  ).padStart(2, "0");
  let hours24 = new String(date.getHours()).padStart(2, "0");
  let minutes = new String(date.getMinutes()).padStart(2, "0");
  let seconds = new String(date.getSeconds()).padStart(2, "0");

  let time12 =
    hours12 +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    (hours12 < 12 ? "AM" : "PM");
  console.log(time12);

  let time24 = hours24 + ":" + minutes + ":" + seconds;
  console.log(time24);
}, 1000);

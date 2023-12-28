setInterval(() => {
  const now = new Date();

  const hours12 = now.getHours() % 12 || 12;
  const amPm = now.getHours() < 12 ? "AM" : "PM";

  const hours24 = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const format12Hour = `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;

  const format24Hour = `${hours24.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  console.clear();
  console.log(format12Hour);
  console.log(format24Hour);
}, 1000);

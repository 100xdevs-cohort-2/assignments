setInterval(() => {
  const date = new Date();

  let [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const APM = hours >= 12 ? "PM" : "AM";

  console.log(
    (hours.toString().length !== 2
      ? "0" + hours.toString()
      : hours.toString()) +
      " :" +
      (minutes.toString().length !== 2
        ? "0" + minutes.toString()
        : minutes.toString()) +
      " :" +
      (seconds.toString().length !== 2
        ? "0" + seconds.toString()
        : seconds.toString()) +
      " " +
      APM
  );
}, 1000);

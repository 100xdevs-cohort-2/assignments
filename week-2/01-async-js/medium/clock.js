const currentTime = () => {
  const interval = setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let minutes =
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds =
      time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let meridien = time.getHours() > 0 && time.getHours() < 12 ? "AM" : "PM";

    console.log(
      `${hour}:${minutes}:${seconds} \n${
        hour % 12
      }:${minutes}:${seconds} ${meridien}\n\n`
    );
  }, 1000);
};

currentTime();

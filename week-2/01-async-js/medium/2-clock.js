function clock() {
  setInterval(() => {
    let time = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };
    console.log(new Intl.DateTimeFormat("en-IN", options).format(time));
  }, 1000);
}

clock();

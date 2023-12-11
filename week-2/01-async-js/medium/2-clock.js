function getCurrentMachineTime() {
  setInterval(() => {
    const date = new Date();
    console.log(
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
      date.getHours() > 12 ? "PM" : "AM"
    );
  }, 1000);
}

getCurrentMachineTime();

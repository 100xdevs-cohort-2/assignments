function getCurrentMachineTime() {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    console.log(
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
      hour > 12 ? "PM" : "AM"
    );
  }, 1000);
}

getCurrentMachineTime();

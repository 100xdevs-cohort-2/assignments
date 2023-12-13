Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 setInterval(function() {
    const currentTime = new Date();
  console.log(currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + " " + currentTime.toLocaleString('en-US'));
},1000)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 setInterval(function () {
  const currentTime = new Date();
  console.log(
    currentTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }),
  );
}, 1000);
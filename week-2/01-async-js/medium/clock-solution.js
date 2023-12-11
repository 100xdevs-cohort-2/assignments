// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function startClock() {
  setInterval(() => {
    console.clear();
    const dateObject = new Date();
    const hour = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();
    const amOrPm = hour >= 12 ? "PM" : "AM";
    console.log(
      `${hour.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}::${seconds.toString().padStart(2, "0")} ${amOrPm}`
    );
  }, 1000);
}

startClock();

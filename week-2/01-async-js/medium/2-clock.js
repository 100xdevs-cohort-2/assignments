// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
//
// Can you make it so that it updates every second, and shows time in the following formats - 
//
//  - HH:MM::SS (Eg. 13:45:23)
//
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
//

let d = new Date();

function timeCounter(runForInSeconds, in24HoursTimeFormat = true) {
  let intervalId = setInterval(function () {
    if (in24HoursTimeFormat) {
      console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
    } else {
      console.log(`${d.getHours() % 12}:${d.getMinutes()}:${d.getSeconds()} ${d.getHours() >= 12 ? "PM" : "AM"}`);
    }
    d = new Date();
  }, 1000);
  setTimeout(() => clearTimeout(intervalId), (runForInSeconds + 1) * 1000);
}

timeCounter(5, false);

// for timeCounter(5) or for 24-hours time format
// 21:21:52
// 21:21:53
// 21:21:54
// 21:21:55
// 21:21:56

// for timeCounter(5, false) or for 12-hours time format
// 9:24:14 PM
// 9:24:15 PM
// 9:24:16 PM
// 9:24:17 PM
// 9:24:18 PM

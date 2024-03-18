// to print in HH:MM::SS (Eg. 13:45:23) format
setInterval(() => {
  const currDate = new Date();
  const hh = currDate.getHours();
  const mm = currDate.getMinutes();
  const ss = currDate.getSeconds();

  console.clear();
  console.log(`${hh}:${mm}:${ss}`);
}, 1000);

// to print in HH:MM::SS AM/PM (Eg 01:45:23 PM) format
setInterval(() => {
  const currDate = new Date();
  const hh = currDate.getHours();
  const mm = currDate.getMinutes();
  const ss = currDate.getSeconds();

  let suffix = hh % 12 === 0 ? "AM" : "PM";

  console.clear();
  console.log(
    `${Math.floor(hh % 12) < 10 ? "0" : ""}${Math.floor(hh % 12)}:${
      mm < 10 ? "0" : ""
    }${mm}:${ss < 10 ? "0" : ""}${ss}: ${suffix}`
  );
}, 1000);

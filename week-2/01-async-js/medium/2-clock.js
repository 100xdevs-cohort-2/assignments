const formatTwoDigits = (number) => (number < 10 ? "0" + number : number);

// Function to get the current time and display it
const printTime = () => {
  const currentTime = new Date();
  const hours = formatTwoDigits(currentTime.getHours());
  const minutes = formatTwoDigits(currentTime.getMinutes());
  const seconds = formatTwoDigits(currentTime.getSeconds());
  let newformat = hours >= 12 ? "PM" : "AM";

  const currentTimeString = `${hours}:${minutes}:${seconds} ` + newformat;
  console.log("Current Time:", currentTimeString);
};

setInterval(printTime, 1000);

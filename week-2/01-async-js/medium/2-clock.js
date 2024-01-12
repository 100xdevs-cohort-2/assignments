setInterval(() => {
  const date = new Date();

  // converting the time into 24 hrs format
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Set to true for 12-hour format
  };

  const formattedTime = date.toLocaleTimeString("en-US", options);
  console.log(formattedTime);

  // 12hr format
  console.log(date.toLocaleTimeString());

}, 1000);

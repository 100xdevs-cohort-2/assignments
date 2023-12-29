// let currentDateTime = new Date();
// stringTime = currentDateTime.toTimeString();

const interval = setInterval(() => {
  let currentDateTime = new Date();
  stringTime12 = currentDateTime.toLocaleTimeString("en-US", { hour12: true });
  stringTime = currentDateTime.toLocaleTimeString("en-US", { hour12: false });
  console.log(stringTime);
  console.log(stringTime12);
}, 1000);

// Create a terminal clock (HH:MM:SS)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Starting Terminal Clock");
setInterval(function () {
  rl.question(
    "Press y to see current time in IST and any other key to close the terminal clock ",
    function (answer) {
      const userInput = answer;
      while (true) {
        if (userInput == "y") {
          var currentTime = new Date();
          console.log(currentTime.toTimeString().split(" ")[0]);
          break;
        } else {
          process.exit();
        }
      }
    }
  );
}, 3000);

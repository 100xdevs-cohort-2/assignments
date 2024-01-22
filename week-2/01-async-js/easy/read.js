const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
setTimeout(() => {
    console.log("This message will appear after 3 seconds")
  }, 3000);
  
  console.log("after setTimeout");
  
  var sum = 0;
  
  for(let i = 0; i<10000000; i++)
  {
    sum = sum + i
  }
  
  console.log("Total Sum : ", sum);
  
  
  console.log("Program is over");
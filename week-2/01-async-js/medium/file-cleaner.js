const fs = require("fs");

fs.readFile("demo.txt", "utf-8", (err, data) => {
  console.log(`before cleaning : ${data}`);

  const cleanData = data.trim().split(" ").filter((i) => {
      if (i != '') {
        return true;
      } else {
        return false;
      }
    }).join(" ");
  
  fs.writeFile('demo.txt',cleanData,(err)=>{
    console.log('data cleaned succeessfully')
  })
});

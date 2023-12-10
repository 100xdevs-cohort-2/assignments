const fs = require("fs");

fs.readFile("./files/a.txt","utf-8",(err, data) => {
  if(err) {
    console.log("Error while reading the file: "+err);
  }
  console.log("Data from the file: "+data);
})


//expensive operation -= 

for(let i = 0; i < 10000000000; i++) {
    
}


//learning is  - as long as there are references in call stack, callback queues references will not be picked up
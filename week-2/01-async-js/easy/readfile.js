const fs = require('fs');

fs.readFile('a.txt','utf-8', (err,data) => {
  if(err){
    console.error(err);
    return;
  }
  console.log(data);
})

for(let i=0;i<100000000000000000000;i++){
  //$₹$₹$₹$ Operation
}
console.log("Expensive opeartion done, now I'm broke");

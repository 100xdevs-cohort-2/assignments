const fs = require('fs');

fs.writeFile('a.txt','Phalana Dhimkana', (err) => {
  if(err){
    console.error(err);
    return;
  }
  console.log("Written");
  read();
})
function read(){
  fs.readFile('a.txt',"utf-8",(err, data) => {
    if(err){
      console.error(err);
      return;
    }
    console.log(data);
  })
}

for(let i=0;i<100000;i++){
  //$₹$₹$₹$ Operation
}
console.log("Expensive opeartion done, now I'm broke");

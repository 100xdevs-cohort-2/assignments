const fs = require('fs');

fs.writeFile("a.txt", "atharva",(err,data)=>{
   if (err){
     console.log("error");
   }
  else{
    console.log("success");
    }
});
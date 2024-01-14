const fs = require('fs');

fs.readFile("a.txt","utf8",(err, data) => {
    
    if(err){
        console.error(err);
        return;
      } 
      console.log(data);

})

/* const fs = require('fs');

function printFile(err, data){
  if(err){
    console.error(err);
    return;
  }
  console.log(data);
}

fs.readFile("a.txt","utf8",printFile);

 */
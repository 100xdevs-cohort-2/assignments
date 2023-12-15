let fs = require('fs');

function WriteToFile(data){
    fs.writeFile("first.txt",data,(err)=>{
        
        if(err){console.log(err)}
        else { 
            console.log("File written successfully\n"); 
            console.log("The written has the following contents:"); 
            console.log(fs.readFileSync("first.txt", "utf8")); 
          } 
    });
}


let d = "dfsadhjdkshkahdsflkjdasfakdsjfliuakfedslkufkjdsfdfaiuyroiuewkjadsfhdjafefjadkjsfakdjfairfjsdndmcmsdbfhlkadjsfsa";
WriteToFile(d);
for(let i=0;i<10000;i++){
    console.log(i);
}
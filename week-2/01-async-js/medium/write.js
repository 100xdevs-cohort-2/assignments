const fs = require("fs")
const path = require("path")
let str;

function readFile(){
  fs.readFile("a.txt","utf-8",function(err,data){
    if(err){
      console.log("error reading the file")
    }
    else{
      str = data;
      console.log("successfull read the file")
      updateString();
    }
  })
}

readFile();

function updateString(){
  str = str.replace(/\s+/g,' ')

  fs.writeFile(path.join(__dirname,"a.txt"),str,{flag:'w'},(err,data)=>{
    if(err) console.log("Eror writing file")
    else{
      console.log("successfully written the file")
    }
  })
}

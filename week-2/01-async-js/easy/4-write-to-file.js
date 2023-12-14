// ## Write to a file
// Using the fs library again, try to write to the contents of a file.



// You can use the fs library to as a black box, the goal is to understand async tasks.
function writeToFile(){
    const fs = require('fs');
    const filePath='a.txt';
    const cont='Hello!';
    let datatowrite=readFromFile("a.txt");

    fs.writeFile(filePath,datatowrite+cont,'utf-8',(err,data)=>{
        if(err) throw new Error("FIle not Found");
        //console.log(data);
        console.log('Done!');
    })
    
}
function readFromFile(path){
    const fs= require('fs');
    let fileData='';
    const a= fs.readFile(path,'utf-8',(err,data)=>{
        if(err) throw new Error("Custom Error");
        fileData=data;
        return fileData;
    })   
}
//console.log("WriteFIleTIme:")
writeToFile();//write 

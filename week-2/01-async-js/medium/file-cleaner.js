
const fs = require("fs");

function readingFile(){
    return new Promise(function(resolve){
        fs.readFile("clean.txt","utf-8",function (err,data){
            resolve(data);
        })
    }) 
}


async function clean(){
    let val = await readingFile();
    const newString = val.replace(/\s+/g, ' ').trim();
    console.log (newString);

    fs.writeFile("clean.txt",newString,(err)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log("written successfully");
        }
    });
}
clean ();
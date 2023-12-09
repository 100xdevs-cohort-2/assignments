const fs = require("fs");

function readFile(){
    return new Promise((resolve, reject) => {
        fs.readFile("week02\\01-async-js\\easy\\3-read-from-file.md","utf-8",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
};

async function catchData(){
    let data = await readFile();
    console.log(data);
}

catchData();


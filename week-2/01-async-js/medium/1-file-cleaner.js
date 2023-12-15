let fs = require('fs');

function FileReader(){
    return new Promise(function(resolve){
        fs.readFile("first.txt","utf-8",(err,data)=>{
            if(!err){
                console.log(data);
                resolve(data);
            }
        })
    });
}

function WriteToFile(data){
    let newData = data.replace(/\s+/g, " ");
    fs.writeFile("first.txt",newData,(err)=>{
        if(!err){
            console.log("File has been updated");
            console.log(newData);
        }
    });
}

let p = FileReader();


for(let i=0;i<10;i++){
    console.log(i)
}

p.then(WriteToFile);


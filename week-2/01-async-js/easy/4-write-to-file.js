// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');



fs.writeFile('temp.txt',"added new content",'utf-8',(err)=>{
  
    console.log("content has been updated");
})



const p = new Promise((resolve,reject)=>{
    fs.writeFile('temp.txt','added new content','utf-8',(err)=>{
        if(err){
            reject("error while writing",err);
        }
        resolve("updated the content");
    })
})

p.then(fs.readFile('temp.txt','utf-8',(err,data)=>{
    console.log(data);
}))
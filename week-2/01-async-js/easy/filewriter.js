const fs = require ('fs')

const contenttoadd ='hello i am edited through fs';

fs.writeFile('try.txt',contenttoadd,'utf-8',(error)=>{
    if(error){
        console.log(error);
    }
    else console.log("file updated")
})

console.log("hi I am declared after fs.writefile function  but fs is async func function so the fs is running assync and control came to me control will be given back to fs only after my execution till then the fs will be in callback quee")
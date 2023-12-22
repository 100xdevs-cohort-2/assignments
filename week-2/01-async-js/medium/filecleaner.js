const fs = require ('fs')

fs.readFile('try.txt','utf-8',(error,data)=>{
    console.log(data);
    console.log(data.replace( /\s+/g, ' '));


})


// fs.writeFile('try.txt',contenttoadd,'utf-8',(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else console.log("file updated")
// })
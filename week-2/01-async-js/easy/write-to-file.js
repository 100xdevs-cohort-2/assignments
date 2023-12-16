const fs = require('fs');

fs.writeFile('a.txt','Hi this is new text from the js file.',(err)=>{
    if(err){
        console.error("Error writing to the file:", err);
    }
    else{
        console.log("Written the data into the text file");
    }
})


fs.readFile('a.txt', 'utf-8',(err,data)=>{
    console.log("New data is :" + data);
})

let c = 0;
for (let i=0; i<100000; i++){
    c++;
}

// fs.readFile('a.txt', 'utf-8',(err,data)=>{
//     console.log("New data is :" + data);
// })
console.log(c);
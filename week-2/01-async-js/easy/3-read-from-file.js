const fs = require("fs")

// fs.promises.readFile("3file.txt","utf-8").then((data)=>console.log(data))

async function readFromFile(){
    const data = await fs.promises.readFile("3file.txt","utf-8")
    console.log(data)
}

readFromFile()

for(let i=0;i<5000000000;i++){

}

console.log("hello")
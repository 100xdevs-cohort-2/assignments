const fs = require("fs")

async function appendToFile(path,content){
    await fs.promises.appendFile(path,content)
}

async function writeToFile(path,content){
    await fs.promises.writeFile(path,content)
}


console.log("i am about to write to a file")

// for(let i=0;i<5;i++){
//     appendToFile("4file.txt",`this is added to the file in attempt no ${i}\n`)
// }

writeToFile("4file.txt","writen through writefile")


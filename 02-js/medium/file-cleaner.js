const fs = require('fs')
const newFileContent = []
let cleanedContent = ''
async function readFile(){
    await fs.readFile("a.txt", "utf-8", (err, data)=>{
        console.log(data);
        const fileContent = data.split(" ")
        fileContent.forEach((word)=>{
            if(word !== "") newFileContent.push(word)
        }) 
        cleanedContent = newFileContent.join(" ")
        fs.writeFile('a.txt', cleanedContent, 'utf-8', (err)=>{
            if(err){
                console.log(err);
            }
        })
    })
}

readFile()

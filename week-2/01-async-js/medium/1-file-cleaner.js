let fs = require("fs")

fs.readFile("file.txt", "utf-8", (err, data) => {
    let refinedString = cleanFileData(data)
    fs.writeFile("file.txt", refinedString, (err) => {
        if(err){
            console.log("Error writing to file")
        } else {
            console.log("Written file successfully")
        }
    })
})

function cleanFileData(data){
    let chars = data.split(" ")
    let refinedStringArr = []
    for(character in chars){
        if(chars[character]!=""){
            refinedStringArr.push(chars[character]);
            refinedStringArr.push(" ")
        }
    }
    refinedStringArr.pop()
    return (refinedStringArr.join(''))
}


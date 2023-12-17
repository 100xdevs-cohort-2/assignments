const fs = require('fs');


fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error Reading File");
        return;
    }
    const cleansedData = cleanData(data);
    writeToFile(cleansedData)
})

function cleanData(content){
    return content.replace(/\s+/g, ' ');
}


function writeToFile(content){
    fs.writeFile('a.txt',content,(err,data)=>{
        if(err){
            console.log("Error Reading File");
            return;
        }
        console.log('Written')
    })

}

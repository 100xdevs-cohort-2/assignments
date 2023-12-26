const {readFromFile}=require('./read-from-file')
const fs=require('fs')
function writeToFile(file,data1){
    return new Promise((resolve,reject)=>{
        readFromFile(file).then((data)=>{
            console.log(`The previous data is:  ${data}`);
            fs.writeFile(file,data1,{ flag: 'a' },(err)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data1)
                }
            })
        }).catch((err)=>{
            console.log("File not found",err);
        })
        
    })
}
const dataToWrite = 'Hello, this is some text that will be written to the file.';
writeToFile('a.txt',dataToWrite).then((data)=>{
    console.log("written succefully")
}).catch((err)=>{
    console.log("File not found",err);
})

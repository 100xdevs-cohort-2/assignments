const fs=require('fs')
function readFromFile(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}


module.exports = {
    readFromFile
};
const {readFromFile}=require('../easy/read-from-file')
const fs=require('fs')
function fileclean(file){
    return new Promise((resolve,reject)=>{
        readFromFile(file).then((data)=>{
            new_data=data.split(/\s+/g).filter(Boolean);
            new_data=new_data.join(" ");
            fs.writeFile(file,new_data,(err)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(new_data);
                }
            })
         } )
        
        
    })
}


fileclean('1-file-cleaner.txt').then((data)=>{
    console.log('written succefully')
}).catch((err)=>{
    console.log('file not found')
})

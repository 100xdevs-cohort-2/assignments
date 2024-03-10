const fs = require('fs');


const readFile = (path) =>{    
    
    fs.readFile(path,'utf-8', (err, data) => {
        
        if(err){
            console.log(err.message)
        }
        console.log("Expensive operation started")
        
        for(let i =0; i < 1000000000; i++){
            
        }
        console.log("Expensive Operation done")
        console.log(data)
    })


    
}

const path = '3-read-from-file.md'


readFile(path)
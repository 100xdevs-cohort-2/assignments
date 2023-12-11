const fs = require('fs')

function read(){
    return new Promise(function(resolve){
        fs.readFile('one.txt','utf-8',function(err,data){
            // console.log(data)
            let val = data.replace(/\s+/g, ' ')
            
            resolve(val)
        })

    })
}

read()

async function write(){
    let data  = await read()
    // console.log(data)
    fs.writeFile('one.txt',data,function(err,data){
        console.log("spaces removed succesfully")
    })
}

write()


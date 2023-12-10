const fs= require('fs')

fs.readFile('temp.txt','utf-8',(err,data)=>{
    if(err)
        console.log('some error')
    else{
        let newData = []
        
        data.split(' ').forEach(word => {
            
            if(word !== ""){
                console.log(word)
                newData.push(word)
            }
        })
        newData=newData.join(" ")

        fs.writeFile("temp.txt", newData, err=>{})
    }
})
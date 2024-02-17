const fs =require('fs')
fs.readFile('read.txt',"utf-8",function(err,data){
    let names=[]
    data.split(' ').forEach(word=>{
        if(word!==""){
            names.push(word)
        }
    })
    names=names.join(' ')
    fs.writeFile('read.txt',names,(err)=>{})

}


)
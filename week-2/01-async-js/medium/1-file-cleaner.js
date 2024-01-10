// writing to a file
var fs = require("fs")




    console.log("Reading from input.txt")
    fs.readFile("test.txt",'utf8',(err,data)=>{
        if(err){
            return console.error(err)
        }        
        console.log(data);
        let stripdata = data.replace(/\s+/g , ' ');
        console.log(stripdata)
        fs.writeFile('test.txt',stripdata, 'utf8', function(err){
            if(err){
                return console.error(err)
            }  
        });
        console.log("file has been changed")
    })  



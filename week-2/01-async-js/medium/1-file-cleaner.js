const fs = require('fs');

var str="";

fs.readFile('a.txt','utf8',(err,data) => {
    if(err){
        console.log("cant open file")
    }else{
        fnWrite(data);
    }
})

function fnWrite(data){
  //  console.log(data);
    str = data;
    var splitData = str.split(" ");
    var ctr = 0;
    var noSpaceData = [];
    for(var i=0;i< splitData.length; i++){
        if(splitData[i] ===""){

        }else{
            noSpaceData[ctr] = splitData[i];
            ctr++
        }
    }
    var finalData = noSpaceData.join(" ");
    fs.writeFile("a.txt",finalData,"utf8",err => {
        console.log("File written")
    })
}


const fs=require("fs");

fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        fs.writeFile("./file.txt",data.replace(/\s{2,}/g," "),"utf-8",(error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("data cleaned sucessfully");
            }
        })
    }
})


const fs=require("fs");
fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`${data}`);
    }
})

//expensive operation
let c=0;
for(let i=0;i<10000000000;i++){
    c=c+1;
}
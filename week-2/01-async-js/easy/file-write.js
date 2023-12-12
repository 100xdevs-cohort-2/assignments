const fs=require("fs");

const data="hello 100xdevs folks";

fs.writeFile("./file2.txt",data,"utf-8",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("sucessfully written data to a file");
    }
});

//expensive operation to check asynchronous nature
let c=0;
for(let i=0;i<100000000;i++){
    c++;
}

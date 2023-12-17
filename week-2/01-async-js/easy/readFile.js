const fs =require('fs');
fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
})

for (let i=0;i<1000000000;i++){
    //time consuming task
}

console.log('Lot of time has been consumed')



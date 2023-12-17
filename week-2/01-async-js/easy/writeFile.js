const fs = require('fs');

fs.writeFile('a.txt','Dhinkichikka Dhinkichikka',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('written to file a.txt');
    read();
})

function read(){
    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err){
            console.log('could not read file');
            return;
        }

        console.log(data);
    })
}


for(i=0;i<100000;i++){
    //Expensive operation
}


console.log('Completed running expensive opeartion')
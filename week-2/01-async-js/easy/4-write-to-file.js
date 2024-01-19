

const fs = require('fs');




fs.writeFile('temp.txt',"wrote new content successfully",'utf-8',(err)=>{
  
    console.log("content has been updated");
})



const p = new Promise((resolve,reject)=>{
    fs.writeFile('temp.txt','wrote new content successfully','utf-8',(err)=>{
        if(err){
            reject("error while writing",err);
        }
        resolve("updated the content");
    })
})

p.then(fs.readFile('temp.txt','utf-8',(err,data)=>{
    console.log(data);
}))



// const fs = require('fs');

// function writing(){
//     fs.writeFile('temp.txt','Just adding new content async task about writing file','utf-8',(err)=>{
//         if(err){
//             console.log('error writing to file: ',err.message);
//         }
//         else{
//             console.log('writing file succesful');
//         }
//         let sum = 0;
//             for(let i = 0;i<1000000000;i++){
//                 sum = sum+1;
//             }
//             console.log(`expensive operation done and dusted,sum is${sum}`);
//     })

// }

// writing();


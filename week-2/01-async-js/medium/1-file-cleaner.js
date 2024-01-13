const fs=require("fs");

fs.readFile('a.txt','utf-8',(err,data)=>{
    fs.writeFile('a.txt',clean(data),(err) => {
        console.log('updated successfully');
        })
    }
)

function clean(str){
    let newStr=str[0];
    for (let i = 1; i < str.length; i++) {
        if(str[i]==' ' && str[i-1]==' '){
            continue;
        }else{
            newStr+=str[i];
        }
    }
    return newStr;
}
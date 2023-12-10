const fs= require("fs");

fs.readFile("./3-read-from-file.md", 'utf-8', function (error, data) {

if(error){
    console.log(error);

}
else
{
    console.log(data);
}


});

let count=0;
for(let i=0;i<99000000000000;i++){
    count +=i;
}

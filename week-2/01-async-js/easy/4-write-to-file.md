const fs= require("fs");
function putcontenttofile(cb){
fs.readFile("a.txt","utf-8",function(err,data)
{
if(err){
console.log("error reading file:", err);
return;}
data=data+"copyright 2024 dhruv garg";
fs.writeFile("a.txt",data ,function(err)
{
if(err)
{
console.log("error reading file:", err);
return;
}
cb();
}
);
}
);
}
putcontenttofile(function()
{
console.log("copyright has been put to file");
}
);

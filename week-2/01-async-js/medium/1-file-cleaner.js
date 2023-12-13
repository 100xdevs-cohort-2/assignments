const fs =require('fs');
var str = "";
fs.readFile('zoonear.txt', 'utf8',function (err,data) {
    str =data;
    console.log(data);
    
});

str = str.replace(/\s+/g, ' ').trim();
console.log(str);
// fs.writeFile('zoonear.txt',str,'utf8',function () {
//     console.log('done');
    
// })
// fs.readFile('zoonear.txt', 'utf8',function (err,data) {
//     str = data;
//     console.log(str);
    
// });

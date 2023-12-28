const fs =require('fs');
var str = "";
fs.readFile('zoonear1.txt', 'utf8',function (err,data) {
    console.log(data);
    rewrite(data);
});

function rewrite(str) {
    str = str.replace(/\s+/g, ' ').trim();
console.log(str);
fs.writeFile('zoonear1.txt',str,'utf8',function () {
    console.log('done');
    
})
}


// str = str.replace(/\s+/g, ' ').trim();
// console.log(str);
// fs.writeFile('zoonear.txt',str,'utf8',function () {
//     console.log('done');
    
// })
// fs.readFile('zoonear.txt', 'utf8',function (err,data) {
//     str = data;
//     console.log(str);
    
// });
// console.log(str);
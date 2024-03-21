const fs =require('fs');
fs.readFile('zoonear.txt', 'utf8',function (err,data) {
    console.log(data);
    console.log('vachinda');
    
});
console.log('raatledha');
let value = 10000000;
for (let index = 0; index < value; index++) {
   
    
}

///if we continue to increase the value variable to higher number the for loop takes time till then the read file operation function stays in the callback queue only

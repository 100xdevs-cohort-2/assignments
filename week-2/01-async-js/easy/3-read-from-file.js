const fs = require('fs');


fs.readFile("a.txt", function(err,data){
    console.log(data);
})


let sum = 0;
for(let i=0; i<1000; i++){
    sum+=i;
}
console.log(sum);
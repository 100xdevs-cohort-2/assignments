const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data);
})

let sum = 0;
for(let i=0; i<100000000; i++){
    sum +=i;
}

// first the loop will run for the mean time the read file will stay in the callback queue after the loop end it will be executed
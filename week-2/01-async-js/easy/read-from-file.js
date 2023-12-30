const fs = require('fs')

fs.readFile('textFile.txt', 'utf-8', function(err, data) {
  if(err) {
    console.log("Error: ", err);
  }
  console.log(data);
})

let ans = 1;

for(let i=1; i<=100000; i++) {
  ans += i;
}

console.log("Summation-1 is done");
console.log(ans);

ans = 0;
for(let i=1; i<=10000000; i++) {
  ans += i;
}

console.log("Summation-2 is done");
console.log(ans);



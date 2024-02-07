const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data) => {
	console.log(data);
})

//expensive operation
sum=0
for(let i=0;i<1000000000;i++){
	sum++;
}
console.log("after expensive operation");

const fs = require('fs');


fs.readFile("a.txt","utf-8",(err,data) => {
	console.log(data + " 2");
	fs.appendFile("a.txt"," copyright added",(err,data) => {
		console.log(data + ' 3');
	});
});

let a=0;
for(let i=0;i<10000000;i++){
	a++;
}
console.log("after expensive load - 1");

const fs = require('fs');


fs.readFile("a.txt","utf-8",(err,data) => {
	console.log(data);
	fs.writeFile("a.txt","copyright added",(err,data) => {
		console.log(data);
	});
});

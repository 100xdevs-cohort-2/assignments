const fs = require('fs');
fs.readFile('a.txt','utf-8',(err,data) => {
	let newData = data.split(' ').filter(word => word !== '').join(' ');
	fs.writeFile('a.txt',newData,(err,data) => {
		console.log("JOB DONE");
	})
})

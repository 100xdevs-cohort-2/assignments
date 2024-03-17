import fs from "node:fs/promises";
import path from "node:path";
const pathFile = path.resolve(__dirname, "b.txt");
fs.writeFile(pathFile, "Hello World").then(() => {
	console.log("File written");
});
//some expensive operation
console.time("expensive operation");
let sum = 0;
for (let i = 0; i < 100000; i++) {
	sum += i;
}

console.timeEnd("expensive operation");

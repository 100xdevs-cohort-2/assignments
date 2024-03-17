import fs from "node:fs";
import path from "node:path";
const pathFile = path.resolve(__dirname, "b.txt");

fs.promises.readFile(pathFile, "utf-8").then((data) => {
	console.log(data);
});
console.time("expensive opoeration");
let sum = 0;
for (let i = 0; i < 100000; i++) {
	sum += i;
}
console.timeEnd("expensive opoeration");

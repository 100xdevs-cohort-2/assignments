const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, 'sample.txt');

let data = fs.readFileSync(filepath, "utf-8");

data = data.replace(/\s+/g, ' ').trim();

fs.writeFileSync(filepath, data, "utf-8");

console.log("success");
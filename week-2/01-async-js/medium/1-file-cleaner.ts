import fs from "node:fs/promises";
import path from "node:path";
const pathFile = path.resolve(__dirname, "1.txt");
const data = await fs.readFile(pathFile, "utf-8");
console.log(data);
const updatedStr = data.split(" ").filter(Boolean).join(" ");
await fs.writeFile(pathFile, updatedStr);
console.log(updatedStr);

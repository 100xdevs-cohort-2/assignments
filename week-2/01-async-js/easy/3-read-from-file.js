import fs from "fs";

fs.readFile("./read-from-1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

console.log("what");
let t = 0
// while (t<10000000000) {
//     t++
// }
for(let i = 0; i < 10000000000; i++) {
//   console.log(i);
}

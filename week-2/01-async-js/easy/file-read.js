const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log(data);
});

// proram stuck for more time to do this sync operation
for (let i = 0; i < 1000000000000; i++) {
  i = i + 1;
}

console.log("hey man!");

const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

function expensiveOperation() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += Math.random();
    }
    console.log("Expensive operation result:", result);
}

expensiveOperation();

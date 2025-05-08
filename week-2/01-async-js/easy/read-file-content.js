const fs = require ('fs').promises;
const prompt = require('prompt-sync')();

async function expensiveOperation(n){
    let res = 0;
    for(let i = 0; i< n; i++){
        
        res += Math.sqrt(i) * Math.random();
    }

    console.log(`Expensive computation result: ${res}`);
}
async function readFileContent(){

    const FILE_PATH = "3-read-from-file.md";

    try{
        const data = await fs.readFile(FILE_PATH, "utf-8");
        console.log("File Content: ");
        console.log(data);
    }
    catch(err){
        console.error("Error Reading the file content: ", err.message);
    }

}

async function main(){

    const iterations = prompt('How Many Iterations? ');
    console.log(`No of Iterations are , ${iterations}!`);
    try{
        await Promise.all([readFileContent(), expensiveOperation(iterations)]);
    }
    catch(err){
        console.error('Program error:', error.message);
    }

}

main();

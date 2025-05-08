const fs = require ('fs').promises;
const prompt = require('prompt-sync')();

async function expensiveOperation(n){
    let res = 0;
    for(let i = 0; i< n; i++){
        
        res += Math.sqrt(i) * Math.random();
    }

    console.log(`Expensive computation result: ${res}`);
}
async function writeFileContent(content){

    const FILE_PATH = "output.txt";

    try{
        await fs.writeFile(FILE_PATH, content,  "utf-8");

        console.log("Succesfully wrote to the file");

        const data = await fs.readFile(FILE_PATH, "utf-8");
        console.log('File Content: ');
        console.log(data);
    }
    catch(err){
        console.error("Error Writing to the file: ", err.message);
    }

}

async function main() {
    const content = prompt('Enter File Content to write to the file: ');
    const iterations = parseInt(prompt('How Many Iterations? '));
  
    try {
      await Promise.all([
        writeFileContent(content),
        expensiveOperation(iterations)
      ]);
      console.log('All operations completed successfully.');
    } catch (err) {
      console.error('Program error:', err.message);
    }
  }
  

main();

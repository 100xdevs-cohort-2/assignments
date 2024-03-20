const fs = require('fs').promises;

async function readFileAndPrint(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    return data;
  } catch (err) {
    console.error(`Error reading file: ${err}`);
    throw err;
  }
}

async function writeFile(data, filename) {
  try {
    await fs.writeFile(filename, data);
    console.log(`Data successfully written to ${filename}`);
  } catch (err) {
    console.error(`Error writing to file: ${err}`);
    throw err;
  }
}

async function run() {
  const filePath = 'week-2\\01-async-js\\medium\\dummyFile.txt';
  let content = await readFileAndPrint(filePath);
  const wordsArray = content.split(/\s+/);
  await writeFile(wordsArray.join(" "), 'week-2\\01-async-js\\medium\\newDummyFile.txt');
  console.log(await readFileAndPrint('week-2\\01-async-js\\medium\\newDummyFile.txt'));
}

run();

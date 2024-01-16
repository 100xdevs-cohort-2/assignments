const fs = require('node:fs/promises');
const showContents = async () => {
    const fileContents = await fs.readFile(`${__dirname}/3-read-from-file.md`, { encoding: 'utf-8' });
    return fileContents;
}
const content = showContents().then(d => console.log('DATA', d));

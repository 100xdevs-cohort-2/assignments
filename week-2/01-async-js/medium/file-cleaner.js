async function main()
{
    const fs = require('fs/promises');

    const data = await fs.readFile('file.txt', {encoding: 'utf-8'});

    const dataArr = data.split(/ +/g);
    console.log(dataArr);

    fs.writeFile('file.txt', dataArr.join(" "));
}

main();

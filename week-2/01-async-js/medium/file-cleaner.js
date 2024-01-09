const fs = require('node:fs/promises');


const redFromFile = async () => {
  try {
    const file = await fs.readFile('file.txt', 'utf-8')
    return file
  } catch (error) {
    console.log(error)
  }
}

const removeSpaces = (text) => {
  let i = 0, j = 0;

  let newString = ""

  while (i < text.length && j < text.length) {
    while (text[i] === ' ') {
      i++;
    }
    j = i;
    while (text[i] !== ' ' && i < text.length) {
      i++;
    }
    newString += text.slice(j, i) + " "
    j = i;
  }
  return newString
}

const main = async () => {
  const app = await redFromFile()
  const newString = removeSpaces(app)
  console.log(newString)
}

main()

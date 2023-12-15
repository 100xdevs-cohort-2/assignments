function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  if(cleanStr1.length !== cleanStr2.length){
    return false
  }
  const sortedStr1 = cleanStr1.split('').sort().join('')
  const sortedStr2 = cleanStr2.split('').sort().join('')

  return sortedStr1 === sortedStr2
}

const result1 = isAnagram('listen', 'silent');
console.log(result1);
const result2 = isAnagram('Hello World!', 'dlrow olleh');
console.log(result2)
const result3 = isAnagram('hello', 'world');
console.log(result3);

module.exports = isAnagram;

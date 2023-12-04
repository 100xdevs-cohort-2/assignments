function countVowels(str) {
  let count = 0;
  let strLower = str.toLowerCase();

  for (let i = 0; i < strLower.length; i++) {
      if ('aeiou'.includes(strLower[i])) {
          count++;
      }
  }

  return count;
}

module.exports = countVowels;

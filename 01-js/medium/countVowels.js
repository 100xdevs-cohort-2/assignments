function countVowels(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
      if (['a', 'e', 'i', 'o', 'u'].includes(str[i].toLowerCase())) {
          cnt++;
      }
  }
  return cnt;
}

module.exports = countVowels;

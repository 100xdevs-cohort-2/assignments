/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const strLow1 = str1.toLowerCase();
  const strLow2 = str2.toLowerCase();

  if (len1 != len2) return false;

  const letterMap = new Map();

  for (let index = 0; index < len1; index++) {
    if (letterMap.get(strLow1[index]) === undefined)
      letterMap.set(strLow1[index], 1);
    else {
      let count = letterMap.get(strLow1[index]);
      letterMap.set(strLow1[index], count + 1);
    }
  }
  for (let j = 0; j < len2; j++) {
    const currCount = letterMap.get(strLow2[j]);
    if (currCount === undefined || currCount === 0) return false;
    else letterMap.set(strLow2[j], currCount - 1);
  }

  const iter = letterMap.values();

  for (let val in iter) {
    if (val !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;

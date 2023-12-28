/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lenghtStr1 = str1.length;
  const lenghtStr2 = str2.length;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (lenghtStr1 !== lenghtStr2) return false;

  const obj = {};
  for (let i = 0; i < lenghtStr1; i++) {
    if (str1[i] in obj) {
      obj[str1[i]] += 1;
    } else {
      obj[str1[i]] = 1;
    }
  }

  for (let i = 0; i < lenghtStr2; i++) {
    if (str2[i] in obj) obj[str2[i]] -= 1;
    else return false;
  }

  for (let key in obj) {
    if (obj[key] != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const n1 = str1.length;
  const n2 = str2.length;
  if (n1 != n2) {
    return false;
  }

  let arrStr1 = [...str1.toLowerCase()];
  let arrStr2 = [...str2.toLowerCase()];

  arrStr1.sort();
  arrStr2.sort();

  for (let i = 0; i < n1; i++) {
    if (arrStr1[i] != arrStr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;

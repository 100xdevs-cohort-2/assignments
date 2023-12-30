/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let lenStr1 = str1.length;
  let lenStr2 = str2.length;

  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();

  let sortedStr1 = s1.split("").sort().join("");
  let sortedStr2 = s2.split("").sort().join("");

  if (lenStr1 != lenStr2) {
    return false;
  }


  for (let i = 0; i < lenStr1; i++) {
    if (sortedStr1[i] != sortedStr2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;

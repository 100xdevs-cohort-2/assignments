/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let strArray1= str1.split("");
  let strArray2 = str2.split("");

  strArray1.sort();
  strArray2.sort();

  for(let i =0;i < strArray1.length;i++) {
    if(strArray1[i] !== strArray2[i]) {
      return false;
    }

  }
  return true;
}

module.exports = isAnagram;

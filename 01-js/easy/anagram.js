/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in obj1) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    

    if (str2[i] in obj2) {
      obj2[str2[i]] += 1;
    } else {
      obj2[str2[i]] = 1;
    }
  }
  for(let letter in obj1) {
    if (obj1[letter] !== obj2[letter]) {return false;}
  }
  return true;
}



module.exports = isAnagram;

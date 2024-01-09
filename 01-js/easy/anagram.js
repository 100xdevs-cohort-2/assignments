/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
let present = true;

function isAnagram(str1, str2) {
  smallStr1 = str1.toLowerCase();
  smallStr2 = str2.toLowerCase();
  let lettersStr1 = smallStr1.split("");
  let lettersStr2 = smallStr2.split("");
  lettersStr1.sort();
  lettersStr2.sort();
  if (lettersStr1.join("") == lettersStr2.join("")){
      return true;
  } 
  return false;
}

module.exports = isAnagram;
;

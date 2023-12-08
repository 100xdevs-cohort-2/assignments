/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const str1s = str1.replace(/\s+/g,'').toLowerCase().split("").sort().join("");
  const str2s = str2.replace(/\s+/g,'').toLowerCase().split("").sort().join("");
  console.log(str1s+" "+str2s);
  return str1s==str2s;
  
}

module.exports = isAnagram;

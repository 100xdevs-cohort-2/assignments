/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!==str2.length) return false;
  let map1 = new Array(100).fill(0);
  let map2 = new Array(100).fill(0);
  for(let i=0;i<str1.length;i++){
    const char1 = str1[i].toLowerCase();
    const char2 = str2[i].toLowerCase();
    map1[char1.charCodeAt(0)-' '.charCodeAt(0)]++;
    map2[char2.charCodeAt(0)-' '.charCodeAt(0)]++;
  }
  for(let i=0;i<100;i++){
    if(map1[i]!==map2[i]) return false;
  }
  return true;
}

module.exports = isAnagram;

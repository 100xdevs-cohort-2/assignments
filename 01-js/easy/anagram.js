/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  s1 = str1.toLowerCase();
  s2 = str2.toLowerCase();


  if(s1.length !== s2.length) {
    return false;
  }
  let countFrq = {};
  for(let char of s1) {
    countFrq[char] = (countFrq[char] || 0) + 1;
  }

  for(let char of s2) {
    if(!countFrq[char]) {
      return false;
    }
    countFrq[char]--;
  }
  return true;
}

module.exports = isAnagram;

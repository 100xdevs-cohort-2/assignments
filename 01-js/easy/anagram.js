/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  }
  let strSmall1 = str1.toLowerCase();
  let strSmall2 = str2.toLowerCase();
  let arr1 = Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    arr1[strSmall1.charCodeAt(i) - 97]++; 
    arr1[strSmall2.charCodeAt(i) - 97]--;
    
  }
  for (let i = 0; i < 26; i++) {
     if(arr1[i] !== 0) {
       return false;
     }
  }
  return true;
}

module.exports = isAnagram;

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z!]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z!]/g, "").toLowerCase();
  let Sort1 = cleanStr1.split('').sort().join();
  let Sort2 = cleanStr2.split('').sort().join();
  if(Sort1 === Sort2){
    return true;
  }else {
    return false;
  }
}

module.exports = isAnagram;

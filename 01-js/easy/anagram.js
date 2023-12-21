/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sort_str1 = str1.toLowerCase().split("").sort().join("");
  const sort_str2 = str2.toLowerCase().split("").sort().join("");

  if(sort_str1 == sort_str2){
    return true;
  }else{
    return false;
  }
}

module.exports = isAnagram;

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



function isAnagram(str1, str2) {
  let sortString = (stringg) => {
    return stringg.split("").sort().join("");
  };

  if(sortString(str1.toLowerCase()) === sortString(str2.toLowerCase())){
    return true;
  }

  else return false;
}

module.exports = isAnagram;

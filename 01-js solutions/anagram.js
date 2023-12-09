/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram (str1, str2) {
  if (str1.length !== str2.length){
      return false;
  }

  const str1Chars = str1.split('').sort();
  const str2Chars = str2.split('').sort();

  for (let i=0; i < str1Chars.length; i++){
     if(str1Chars[i] !== str2Chars[i]){
          return false;
     }
  }
  return true;
}

module.exports = isAnagram;

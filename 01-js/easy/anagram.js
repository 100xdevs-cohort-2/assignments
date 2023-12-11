/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().split('').sort().join();
  str2 = str2.toLowerCase().split('').sort().join();

  if(str1.length == str2.length){
    let len = str1.length;
    while(len){
      if(str1[len-1] !== str2[len-1]) return false;
      len--;
    }
  }else{
    return false;
  }
  return true;
}

module.exports = isAnagram;

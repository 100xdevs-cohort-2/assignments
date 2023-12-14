/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length !== str2.length){
    return false;
  }else{
    let isAnagram = true;
      str1Arr = Array.from(str1.replace(/\s/g, ""));
    for (let i of str1Arr) {
      if (!str2.toLowerCase().includes(i.toLowerCase())) {
        isAnagram = false;
        break;
      } else {
        isAnagram = true;
      }
    }
    return isAnagram;
  }

 
}

module.exports = isAnagram;

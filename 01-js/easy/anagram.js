/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  strArr = str1.toLowerCase().split('');
    str2Arr = str2.toLowerCase().split('');
    strArr.sort();
    str2Arr.sort();
    if(strArr.length != str2Arr.length) return false;
    for(let i=0; i<strArr.length-1; i++){
      if(strArr[i] !== str2Arr[i]){
        return false;
      }
    }
    return true;
}

module.exports = isAnagram;

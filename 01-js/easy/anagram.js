/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  if (str1 == null || str2 == null) return false;
  const arr = new Array(26).fill(0);
  
  for (let i = 0; i < str1.length; i++) {
    arr[str1.toLowerCase().charCodeAt(i)-97]++;
  }
  
  for (let i = 0; i < str2.length; i++) {
    arr[str2.toLowerCase().charCodeAt(i)-97]--;
  }
  for(let idx = 0; idx<arr.length ; idx++){
    if(arr[idx]!=0){
      return false;
    }
  }
  return true;
}


module.exports = isAnagram;

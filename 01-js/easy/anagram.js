/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let count1 = {};
  let count2 = {};
  for(let i=0; i<str1.length; i++){
    count1[str1[i]] = 1 + (count1[str1[i]] || 0)
    count2[str2[i]] = 1 + (count2[str2[i]] || 0)
  }
  for(let i=0; i<str1.length; i++){
    const c = str1[i];
    if (count1[c] !== count2[c]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;

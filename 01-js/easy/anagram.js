/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str11, str22) {
  let str1 = str11.toLowerCase();
  let str2 = str22.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Obj = {};
  const str2Obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Obj[str1[i]]) {
      str1Obj[str1[i]]++;
    } else {
      str1Obj[str1[i]] = 1;
    }

    if (str2Obj[str2[i]]) {
      str2Obj[str2[i]]++;
    } else {
      str2Obj[str2[i]] = 1;
    }
  }
  if(Object.keys(str1Obj).length !== Object.keys(str2Obj).length){
    return false
  }
  return true;
}

module.exports = isAnagram;

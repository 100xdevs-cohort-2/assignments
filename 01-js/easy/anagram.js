/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const arr1 = new Array(256);
  arr1.fill(0);

  const arr2 = new Array(256);
  arr2.fill(0);

  if(str1.length != str2.length) return false;

  for(let i = 0; i < str1.length; i++)
  {
      arr1[str1.charCodeAt(i)]++;
      arr2[str2.charCodeAt(i)]++;
  }

  for(let i = 0; i < 256; i++)
  {
    if(arr1[i] !== arr2[i]) return false;
  }

  return true;
}

module.exports = isAnagram;

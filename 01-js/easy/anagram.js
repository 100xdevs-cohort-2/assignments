/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var map1 = {};
  var map2 = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
	
    if (!(str1[i] in map1)) {
      map1[str1[i]] = 0;
    }
    if (!(str2[i] in map2)) {
      map2[str2[i]] = 0;
    }
    map1[str1[i]]++;
    map2[str2[i]]++;
  }
  for (let i = 0; i < str1.length; i++) {
    if(map1[str1[i]] != map2[str1[i]]){
      return false;
    }
  }
  return true
}

module.exports = isAnagram;

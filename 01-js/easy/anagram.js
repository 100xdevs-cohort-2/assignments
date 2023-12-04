/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let mapa = new Map();
  let mapb = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (mapa.has(str1[i])) {
      mapa.set(str1[i], mapa.get(str1[i]) + 1);
    } else {
      mapa.set(str1[i], 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (mapb.has(str2[i])) {
      mapb.set(str2[i], mapa.get(str2[i]) + 1);
    } else {
      mapb.set(str2[i], 1);
    }
  }
  if (mapa.size == mapb.size) {
    mapa.entries((key, value) => {
      if (!mapb.has(key) || mapb[key] != value)
        return false
    })
    return true;
  }
  return false;
}

module.exports = isAnagram;

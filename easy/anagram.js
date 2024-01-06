/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const cleanstr1 = str1.toLowerCase();
  const cleanstr2 = str2.toLowerCase();
  const str1freq = mapfreq(cleanstr1);
  const str2freq = mapfreq(cleanstr2);
  if(checkEqual(str1freq, str2freq))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function mapfreq(str)
  {
    const charMap = new Map();
    for(const char of str)
    {
      charMap.set(char, (charMap.get(char)||0)+1);
    }
    return charMap;
  }
  function checkEqual(map1, map2)
  {
    if(map1.size!==map2.size)
    {
      return false;
    }
    for(const [key,value] of map1)
    {
      if(map2.get(key)!== value)
      {
        return false;
      }
    }
    return true;
  }

/*

#Naive Solution through sorting

let string1 = str1.toLowerCase().split('').sort().join('');
  let string2 = str2.toLowerCase().split('').sort().join('');
  return string1==string2;

*/

module.exports = isAnagram;

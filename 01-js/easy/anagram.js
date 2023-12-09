/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const clearStr1 = str1.replace(/\s/g, '').toLowerCase();
  const clearStr2 = str2.replace(/\s/g, '').toLowerCase();
  if( clearStr1.length != clearStr2.length) {
    return false;
  }
  else {
    const st1 = clearStr1.split('').sort().join('');
    const st2 = clearStr2.split('').sort().join('');
    if(st1 === st2) {
      return true;
    }
    else return false;
  }
}

module.exports = isAnagram;

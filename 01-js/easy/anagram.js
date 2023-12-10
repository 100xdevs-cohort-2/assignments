/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length != str2.length) return false;
    let checkAnagramMap = new Map();
    let len = str1.length;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for(let i = 0;i<len;i++){
        checkAnagramMap.set(str1[i], (checkAnagramMap.get(str1[i]) || 0) + 1);
        checkAnagramMap.set(str2[i], (checkAnagramMap.get(str2[i]) || 0) - 1);
    }
    for(let count of checkAnagramMap.values()){
        if(count != 0) return false;
    }
    return true;
}

module.exports = isAnagram;

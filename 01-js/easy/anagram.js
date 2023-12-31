/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
    let firstStr = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
    let secondStr = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

    console.log( firstStr, secondStr);

    return firstStr === secondStr;
  
  
}

console.log(isAnagram("ab3   d", "ad!sb3"));

//module.exports = isAnagram;

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function rmv(s){
  let str=s.replace(/\s/g, '');
  return str;
}
function isAnagram(str1, str2) {
    str1=rmv(str1).toLowerCase();;
    str2=rmv(str2).toLowerCase();
    let arr1=str1.split('').sort().join('');
    let arr2 =str2.split('').sort().join('');
    return arr1===arr2;
}
console.log(isAnagram('Debit Card','Bad Credit'))
module.exports = isAnagram;

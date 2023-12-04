/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
let arr = Array.from({length:256}, ()=>0);
for(let i=0; i<str1.length; i++){
  let char = str1[i].toLowerCase();
   arr[char.charCodeAt(0)]++;
}
for(let i=0; i<str2.length; i++){
  let char = str2[i].toLowerCase();
  arr[char.charCodeAt(0)]--;
}
for(let i=0; i<256; i++){
  if(arr[i] !== 0) return false;
}
return true;
}

module.exports = isAnagram;

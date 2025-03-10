/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // so now here it should not be case sensitive and should works for the special character 
  // so we can solve the problem by sorting the both string then we can easily compare the both stirng 
  str1 =  str1.toLowerCase();
  str2 = str2.toLowerCase();
  const str1final = StortedString(str1);
  const str2final = StortedString(str2);
  return str1final === str2final;
  
}
function StortedString(str){
  // so now it convert it the array into char array then sort it then join and  return it 

  const chararray = str.split('');
  chararray.sort();
  return chararray.join('');
}
module.exports = isAnagram;

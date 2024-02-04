/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length
  let n2 = str2.length
  if n1 !=n2{
    return False;
  }
str1.sort();
str2.sort()

  for(i=0;i<n1;i++)
    if str1[i]!=srt2[i]{
    return False;
  }
  return True;

  let str1=['t', 'e', 's', 't'];
let str2=['t', 't', 'e', 'w'];
     
// Function Call
if (areAnagram(str1, str2))
    document.write(
    "The two strings are" + 
    " anagram of each other<br>");
else
    document.write(
    "The two strings are not" + 
    " anagram of each other<br>");
  
}

module.exports = isAnagram;

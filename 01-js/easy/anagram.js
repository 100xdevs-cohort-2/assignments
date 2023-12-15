/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let ans=true;
  const n1=str1.length;
  const n2=str2.length;

  if(n1!=n2)
  return false;

 let s1=str1.toLowerCase();
 let s2=str2.toLowerCase();
 console.log("s1: ",s1);
 
 console.log(s1.split("").sort().join(""));
 console.log("s2: ",s2);
 console.log(s2.split("").sort().join(""));

 if(s1.split("").sort().join("") == s2.split("").sort().join(""))
 return true;
else
return false;

}

module.exports = isAnagram;

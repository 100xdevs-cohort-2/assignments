/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let mapping = new Map();
  for(let i =0;i<str1.length;i++){
    if (!mapping.has(str1[i])) {
      mapping.set(str1[i], 0);
    }
    mapping.set(str1[i], mapping.get(str1[i]) + 1);
  }
  for(let i=0;i<str2.length;i++){
    if(!mapping.has(str2[i])){
      mapping.set(str2[i], 0);
    }
    mapping.set(str2[i], mapping.get(str2[i]) - 1);
  }
  let answer = true;
  mapping.forEach((values,keys)=>{
    console.log(values + " " + keys)
    if(values != 0)answer = false;
  });
  return [...mapping.values()].every(value => value === 0);
}
module.exports = isAnagram;

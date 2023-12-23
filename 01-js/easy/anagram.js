/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let n = str1.length , m = str2.length;
  if(n!=m) return false;

  const map = new Map();
  for(let i = 0 ;i<n;i++){
    let key = str1[i];
    if(map.has(key)){
      let x = map.get(key);
      map.set(key,x+1);
    }
    else map.set(key,1);
  }
  // console.log(map)
  for(let i=0;i<n;i++){
    let key = str2[i];
    if(map.has(key) == false) return false;
    if(map.get(key) == 0) return false;
    else map.set(key , map.get(key)-1);
  }
  map.forEach((value,key) => {
    if(value != 0) return false;
  });
  return true;
}
// let a = isAnagram('hello','aaaaa');
// console.log(a);
module.exports = isAnagram;

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let s1=str1.toLowerCase();
    let s2=str.toLowerCase();
  
    
    const n1=s1.length;
    const n2=s2.length;
    if(n1!=n2){
        return false;
    }
    s1=str1.split('').sort().join('') ;
    s2=str2.split('').sort().join('')
    

    return s1==s2;

}
let val=isAnagram("freeze","zrfee")
console.log(val)

module.exports = isAnagram;
